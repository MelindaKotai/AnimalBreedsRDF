namespace back_end.DTO
{
    public class InsertBreedDTO
    {  
        public string name {get;set;}
        public string image {get;set;}
        public string description {get;set;}

        public int price {get;set;}

        public bool hypoalergenic {get;set;}

        public string categoryID {get;set;}
    }
}