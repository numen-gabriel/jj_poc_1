service CatalogService {    
    function getHello (to:String) returns String;

    function docPost1 (
            token: String, 
            content1: String, 
            content2: String
        ) returns String;

    type Content1 {
        blob: String;
        filename: String;
    }
    action docPost (
            token: String, 
            content1: Content1, 
            content2: String
        ) returns String;
}
