const { executeHttpRequest } = require("@sap-cloud-sdk/http-client");

async function postDocumentJobs(iFile,iOptions,iToken) {
    try {
        let formData = new FormData();
        formData.append('file', iFile);
        formData.append('options', iOptions);

        let sToken = "Bearer " + iToken;

        let response = await executeHttpRequest(
          {
            //url: "https://aiservices-trial-dox.cfapps.us10.hana.ondemand.com/document-information-extraction/v1",
            destinationName: "doc-info-extraction-post",
          },
          {
            method: "post",
            url: "/document/jobs",
            headers: {
              'Content-Type': 'multipart/form-data'
              //'Authorization': sToken
            },
            data: formData
          }
        );
  
        console.log("response no Die.js="+response);
        return response;
      } catch (error) {
        console.log('Catch!! Deu erro na request!!!');
        console.log(error);
      }
}

module.exports = {
    postDocumentJobs: postDocumentJobs
}