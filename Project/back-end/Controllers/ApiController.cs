using back_end.DTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VDS.RDF;
using VDS.RDF.Nodes;
using VDS.RDF.Query;
using VDS.RDF.Update;

namespace back_end.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ApiController:ControllerBase
    {
        

        [HttpGet]
        [Route("getCategories")]
        public ActionResult<IEnumerable<CategoryDTO>> GetCategories()
        {

            List<CategoryDTO> r = new List<CategoryDTO>();
            //se creaza un remote endpoint
            SparqlRemoteEndpoint endpoint = new SparqlRemoteEndpoint(new Uri("http://localhost:8080/rdf4j-server/repositories/grafexamen"));
            //se trimite o interogare catre acest endpoint
            SparqlResultSet results = endpoint.QueryWithResultSet("PREFIX : <http://proiect.ro#>  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> SELECT  ?id ?name WHERE {?id a :Animal; rdfs:label ?name}");
            
            foreach(SparqlResult result in results){
               CategoryDTO category = new CategoryDTO();
               if(result.TryGetValue("id", out INode id)){
                   var s=id.AsValuedNode().AsString();
                   category.id= s.Substring(s.IndexOf("#")+1);
               }
                if(result.TryGetValue("name", out INode n)){
                    category.name= n.AsValuedNode().AsString();
                }
                r.Add(category);
            }
            return Ok(r);
            
        }




        [HttpGet]
        [Route("getBreeds/{id}")]
        public ActionResult<IEnumerable<BreedDTO>> GetBreeds(string id)
        {
            List<BreedDTO> r = new List<BreedDTO>();
            SparqlRemoteEndpoint endpoint = new SparqlRemoteEndpoint(new Uri("http://localhost:8080/rdf4j-server/repositories/grafexamen"));
            SparqlResultSet results = endpoint.QueryWithResultSet("PREFIX : <http://proiect.ro#>  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> SELECT * WHERE {?id :hasCategory :"+id+"; rdfs:label ?name; :image ?image; :price ?price; :description ?description; :isHypoalergenic ?hypoalergenic}"); 
           
            foreach(var result in results){
                BreedDTO breed = new BreedDTO();
                if(result.TryGetValue("id", out var Breedid)){
                    var s=Breedid.AsValuedNode().AsString();
                    breed.id=s.Substring(s.IndexOf("#")+1);
                }
                if(result.TryGetValue("name", out var n)){
                    breed.name= n.AsValuedNode().AsString();
                }
                  if(result.TryGetValue("image", out var i)){
                    breed.image= i.AsValuedNode().AsString();
                }

                if(result.TryGetValue("hypoalergenic", out var h)){
                    breed.hypoalergenic=Convert.ToBoolean(h.AsValuedNode().AsString());
                }
                  if(result.TryGetValue("price", out var p)){
                    breed.price= int.Parse(p.AsValuedNode().AsString());
                }
                  if(result.TryGetValue("description", out var d)){
                    breed.description= d.AsValuedNode().AsString();
                }
                  

                r.Add(breed);
            }

            
            return Ok(r);

        }






        [HttpDelete]
        [Route("Delete/{id}")]
        public ActionResult Delete(string id)
        {
            SparqlRemoteUpdateEndpoint endpoint = new SparqlRemoteUpdateEndpoint(new Uri("http://localhost:8080/rdf4j-server/repositories/grafexamen/statements"));
      
            endpoint.Update("PREFIX : <http://proiect.ro#> DELETE WHERE{ :"+id+" ?x ?y }");

            return Ok("Rasa a fost staersa cu succes!");
        }




        [HttpPost]
        [Route("Insert")]
        public ActionResult Insert(InsertBreedDTO data)
        {
            SparqlRemoteUpdateEndpoint updateEndpoint = new SparqlRemoteUpdateEndpoint(new Uri("http://localhost:8080/rdf4j-server/repositories/grafexamen/statements"));
            SparqlRemoteEndpoint endpoint = new SparqlRemoteEndpoint(new Uri("http://localhost:8080/rdf4j-server/repositories/grafexamen"));
           
            SparqlResultSet result = endpoint.QueryWithResultSet("PREFIX : <http://proiect.ro#> ASK{ :"+data.name.Trim()+" ?proprety ?value}"); 
            if(result.Result==false){
            updateEndpoint.Update("PREFIX : <http://proiect.ro#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> INSERT DATA{ GRAPH :grafRase { :"+data.name.Trim()+" a :Rasa ; :hasCategory :"+data.categoryID+" ; rdfs:label \""+data.name+"\" ; :price "+data.price.ToString()+"; rdfs:label \""+data.name+"\" ; :price "+data.price.ToString()+"; :isHypoalergenic "+data.hypoalergenic.ToString().ToLower()+"; :description \""+data.description+"\"; :image \""+data.image+"\"}}");
          
            return Ok("Rasa a fost adaugata cu succes!");
            }else
            return BadRequest("Aceasta rasa exista deja in baza de date, va rugam introduceti alta denumire!");
           
        }
    }
    
}