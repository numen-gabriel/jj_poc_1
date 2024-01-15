service CatalogService {    
    function getHello (to:String) returns String;

    function docPost1 (
            token: String, 
            content1: String, 
            content2: String
        ) returns String;

    action docPost (
            token: String, 
            content1: String, 
            content2: String
        ) returns String;
}
