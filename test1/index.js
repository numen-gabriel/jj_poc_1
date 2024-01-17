//const { executeHttpRequest } = require("@sap-cloud-sdk/http-client");
//const fetch = require('node-fetch');

let fs = require('fs');

let f1 = async () => {
    try {
        let response = await executeHttpRequest(
            {
                url: "https://services.odata.org/V2/(S(wd5zwkiarvfvgybus0l5a3xe))/OData/OData.svc",
                // destinationName: "northwind",
            },
            {
                method: "get",
                url: "/Products",
            }
        );

        let data = response.data.d.results;

        console.log(data)

        return data;
    } catch (error) {
        console.log(error);
    }
}

let f2 = async () => {

    let url = "https://org-numenit-application-sandbox-sandbox-s4-proxy-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/catalog/docPost";
    let token = "eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vbnVtZW5pdC1hcHBsaWNhdGlvbi1zYW5kYm94LmF1dGhlbnRpY2F0aW9uLnVzMTAuaGFuYS5vbmRlbWFuZC5jb20vdG9rZW5fa2V5cyIsImtpZCI6ImRlZmF1bHQtand0LWtleS0tMTc5OTU5ODQ4MCIsInR5cCI6IkpXVCIsImppZCI6ICJtTWloNFJwdWJkdUZGc1BoSkdsRDN6Y00xVmF4a3hKR3UrM3cwWG5SanpVPSJ9.eyJqdGkiOiJiZGJiOTFjNmJhM2I0Y2QxODUyM2I2YmU1NTQ3NmE3MCIsImV4dF9hdHRyIjp7ImVuaGFuY2VyIjoiWFNVQUEiLCJzdWJhY2NvdW50aWQiOiJmYjBlN2ZmZC1mNTM3LTQ1OGItOTgyZi1iZThiMzFlZGYwY2YiLCJ6ZG4iOiJudW1lbml0LWFwcGxpY2F0aW9uLXNhbmRib3gifSwieHMuc3lzdGVtLmF0dHJpYnV0ZXMiOnsieHMucm9sZWNvbGxlY3Rpb25zIjpbIlByb2Nlc3NBdXRvbWF0aW9uRGV2ZWxvcGVyIiwiQXV0aEdyb3VwLlNpdGUuQWRtaW4iLCJBUElQb3J0YWwuR3Vlc3QiLCJBdXRoR3JvdXAuQ29udGVudEF1dGhvciIsIkJ1aWxkQXBwc19EZXZlbG9wZXIiLCJDbG91ZCBDb25uZWN0b3IgQWRtaW5pc3RyYXRvciIsIlBJTUFTX0ludGVncmF0aW9uQW5hbHlzdCIsIlBJX1JlYWRfT25seSIsIlBJX0ludGVncmF0aW9uX0RldmVsb3BlciIsIkF1dGhHcm91cC5BUEkuQXBwbGljYXRpb25EZXZlbG9wZXIiLCJBdXRoR3JvdXAuQVBJLkFkbWluIiwiQVBJUG9ydGFsLkFkbWluaXN0cmF0b3IiLCJJTlRBU19WaWV3T25seSIsImJyYWRlc2NvX2F0aXZvc19hcHJvdmFkb3IiLCJEZXN0aW5hdGlvbiBBZG1pbmlzdHJhdG9yIiwiR3JhcGhOYXZpZ2F0b3IuVmlld2VyIiwiUHJvY2Vzc0F1dG9tYXRpb25BZG1pbiIsIkF1dGhHcm91cC5Db250ZW50LkFkbWluIiwiSU5UQVNfQnVzaW5lc3NEb21haW5FeHBlcnQiLCJCdXNpbmVzc19BcHBsaWNhdGlvbl9TdHVkaW9fRXh0ZW5zaW9uX0RlcGxveWVyIiwiRVNCTWVzc2FnaW5nLnNlbmQiLCJTdWJhY2NvdW50IEFkbWluaXN0cmF0b3IiLCJCdXNpbmVzc19BcHBsaWNhdGlvbl9TdHVkaW9fQWRtaW5pc3RyYXRvciIsIkVudGVycHJpc2UgTWVzc2FnaW5nIEFkbWluaXN0cmF0b3IiLCJCQVNfQWRtaW5pc3RyYXRvciIsIkNJQVNJbnRlZ3JhdGlvbk1vbml0b3IiLCJQSV9CdXNpbmVzc19FeHBlcnQiLCJJTlRBU19JbnRlZ3JhdGlvbkFyY2hpdGVjdCIsImpqLXBvYy1jb2xsZWN0aW9uIiwiTWVzc2FnaW5nU2VuZCIsImlhZHYtY29udGVudC1kZXZlbG9wZXIiLCJNb2JpbGVBZG1pbiIsIkRvY3VtZW50X0luZm9ybWF0aW9uX0V4dHJhY3Rpb25fVUlfRG9jdW1lbnRfVmlld2VyIiwiT3BlbkNvbm5lY3RvcnNfVXNlciIsIkF1dGhHcm91cC5TZWxmU2VydmljZS5BZG1pbiIsIkRvY3VtZW50X0luZm9ybWF0aW9uX0V4dHJhY3Rpb25fVUlfRW5kX1VzZXIiLCJCdXNpbmVzc19BcHBsaWNhdGlvbl9TdHVkaW9fRGV2ZWxvcGVyIiwiQnVpbGRBcHBzX0FkbWluaXN0cmF0b3IiLCJBdXRoR3JvdXAuQVBJUG9ydGFsUmVnaXN0cmF0aW9uIiwiTGF1bmNocGFkX0V4dGVybmFsX1VzZXIiLCJJTlRBU19BZG1pbmlzdHJhdG9yIiwiUElfQWRtaW5pc3RyYXRvciIsIlByb2Nlc3NBdXRvbWF0aW9uUGFydGljaXBhbnQiLCJFbnRlcnByaXNlIE1lc3NhZ2luZyBEZXZlbG9wZXIiLCJEb2N1bWVudF9JbmZvcm1hdGlvbl9FeHRyYWN0aW9uX1VJX1RlbXBsYXRlc19BZG1pbiIsIkNvbm5lY3Rpdml0eSBhbmQgRGVzdGluYXRpb24gQWRtaW5pc3RyYXRvciIsImlhZHYtY29udGVudC1hZG1pbmlzdHJhdG9yIiwiQ0lBU0ludGVncmF0aW9uRXhwZXJ0IiwiQVBJUG9ydGFsLlNlcnZpY2UuQ2F0YWxvZ0ludGVncmF0aW9uIiwiU3ViYWNjb3VudCBTZXJ2aWNlIEFkbWluaXN0cmF0b3IiLCJTdWJhY2NvdW50IFZpZXdlciIsIkRNUyIsIkVudGVycHJpc2UgTWVzc2FnaW5nIFN1YnNjcmlwdGlvbiBBZG1pbmlzdHJhdG9yIiwiRW50ZXJwcmlzZSBNZXNzYWdpbmcgRGlzcGxheSIsIkJBU19EZXZlbG9wZXIiLCJBUElNYW5hZ2VtZW50LlNlbGZTZXJ2aWNlLkFkbWluaXN0cmF0b3IiLCJHcmFwaC5LZXlVc2VyIiwiSU5UQVNfRW50ZXJwcmlzZUFyY2hpdGVjdCIsIlBJTUFTX0FkbWluaXN0cmF0b3IiLCJJbnRlZ3JhdGlvbl9Qcm92aXNpb25lciIsIkNJQVNJbnRlZ3JhdGlvbkFkbWluIl19LCJnaXZlbl9uYW1lIjoiRXJpYyIsInhzLnVzZXIuYXR0cmlidXRlcyI6e30sImZhbWlseV9uYW1lIjoiQ2Fzc2FybyIsInN1YiI6IjM1MmZkMjQ3LTg4NTAtNDRhNC1iMTMxLWEzYmJkMzA3ZTA3YiIsInNjb3BlIjpbInM0LXByb3h5LW9yZy1udW1lbml0LWFwcGxpY2F0aW9uLXNhbmRib3gtc2FuZGJveCF0MTI5ODAxLmFkbWluIl0sImNsaWVudF9pZCI6InNiLXM0LXByb3h5LW9yZy1udW1lbml0LWFwcGxpY2F0aW9uLXNhbmRib3gtc2FuZGJveCF0MTI5ODAxIiwiY2lkIjoic2ItczQtcHJveHktb3JnLW51bWVuaXQtYXBwbGljYXRpb24tc2FuZGJveC1zYW5kYm94IXQxMjk4MDEiLCJhenAiOiJzYi1zNC1wcm94eS1vcmctbnVtZW5pdC1hcHBsaWNhdGlvbi1zYW5kYm94LXNhbmRib3ghdDEyOTgwMSIsImdyYW50X3R5cGUiOiJwYXNzd29yZCIsInVzZXJfaWQiOiIzNTJmZDI0Ny04ODUwLTQ0YTQtYjEzMS1hM2JiZDMwN2UwN2IiLCJvcmlnaW4iOiJzYXAuZGVmYXVsdCIsInVzZXJfbmFtZSI6ImVyaWMuY2Fzc2Fyb0BudW1lbml0LmNvbSIsImVtYWlsIjoiZXJpYy5jYXNzYXJvQG51bWVuaXQuY29tIiwiYXV0aF90aW1lIjoxNzA1NDA0MjAxLCJyZXZfc2lnIjoiY2Y0NDA3YjEiLCJpYXQiOjE3MDU0MDQyMDEsImV4cCI6MTcwNTQ0NzQwMSwiaXNzIjoiaHR0cHM6Ly9udW1lbml0LWFwcGxpY2F0aW9uLXNhbmRib3guYXV0aGVudGljYXRpb24udXMxMC5oYW5hLm9uZGVtYW5kLmNvbS9vYXV0aC90b2tlbiIsInppZCI6ImZiMGU3ZmZkLWY1MzctNDU4Yi05ODJmLWJlOGIzMWVkZjBjZiIsImF1ZCI6WyJzNC1wcm94eS1vcmctbnVtZW5pdC1hcHBsaWNhdGlvbi1zYW5kYm94LXNhbmRib3ghdDEyOTgwMSIsInNiLXM0LXByb3h5LW9yZy1udW1lbml0LWFwcGxpY2F0aW9uLXNhbmRib3gtc2FuZGJveCF0MTI5ODAxIl19.QsqePf3juLboQO9Tdm0OwD-ifd9_44GNXxdSHbWZuugbRuoK0dEiiFawboWZ6fwRrZh2q5Cn9ayrHYPsPD4v8oLLKuIP7xdpu6vAaQuLWbfhA1wC2NRMGaYAIFWlvQIAOYbngpTPVDLuEGyqQoLrQmGq0TeYKcWCbxiNZOS-kTEjluDhn2Vy4QYP4hLJaplD6eOy-pZS48uBy00sRraVD2DjV0AuHdW4C3valP44feE2XRMQuX8wyf8tHRpx1JAVf1skBueqGL0IGj86jx6SReHFN3oDz_Y95KQw7_iYlSMIVfhNkcb_CndUJa6-ATHT0bfgfYyQjysfpnCd8KYihQ";

    // Request options
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        body:
            JSON.stringify(
                {
                    "token": "123",
                    "content1": {
                        "blob": "ABC",
                        "filename": "pedido.pdf"
                    },
                    "content2": "xyz..."
                }
            )
    }

    //console.log('checkpoint: before sending request')

    // Call CAP service
    let response = fetch(url, requestOptions);

    console.log(response.value);

    //console.log(response)
}

let f3 = async () => {

    let url = "https://s4-proxy-srv.cfapps.us10-001.hana.ondemand.com/docPost";
    //let url = "http://localhost:8080/docPost"
    let tokenDIE = "eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vbnVtZW5pdC1hcHBsaWNhdGlvbi1zYW5kYm94LmF1dGhlbnRpY2F0aW9uLnVzMTAuaGFuYS5vbmRlbWFuZC5jb20vdG9rZW5fa2V5cyIsImtpZCI6ImRlZmF1bHQtand0LWtleS0tMTc5OTU5ODQ4MCIsInR5cCI6IkpXVCIsImppZCI6ICJtTWloNFJwdWJkdUZGc1BoSkdsRDN6Y00xVmF4a3hKR3UrM3cwWG5SanpVPSJ9.eyJqdGkiOiJiZGJiOTFjNmJhM2I0Y2QxODUyM2I2YmU1NTQ3NmE3MCIsImV4dF9hdHRyIjp7ImVuaGFuY2VyIjoiWFNVQUEiLCJzdWJhY2NvdW50aWQiOiJmYjBlN2ZmZC1mNTM3LTQ1OGItOTgyZi1iZThiMzFlZGYwY2YiLCJ6ZG4iOiJudW1lbml0LWFwcGxpY2F0aW9uLXNhbmRib3gifSwieHMuc3lzdGVtLmF0dHJpYnV0ZXMiOnsieHMucm9sZWNvbGxlY3Rpb25zIjpbIlByb2Nlc3NBdXRvbWF0aW9uRGV2ZWxvcGVyIiwiQXV0aEdyb3VwLlNpdGUuQWRtaW4iLCJBUElQb3J0YWwuR3Vlc3QiLCJBdXRoR3JvdXAuQ29udGVudEF1dGhvciIsIkJ1aWxkQXBwc19EZXZlbG9wZXIiLCJDbG91ZCBDb25uZWN0b3IgQWRtaW5pc3RyYXRvciIsIlBJTUFTX0ludGVncmF0aW9uQW5hbHlzdCIsIlBJX1JlYWRfT25seSIsIlBJX0ludGVncmF0aW9uX0RldmVsb3BlciIsIkF1dGhHcm91cC5BUEkuQXBwbGljYXRpb25EZXZlbG9wZXIiLCJBdXRoR3JvdXAuQVBJLkFkbWluIiwiQVBJUG9ydGFsLkFkbWluaXN0cmF0b3IiLCJJTlRBU19WaWV3T25seSIsImJyYWRlc2NvX2F0aXZvc19hcHJvdmFkb3IiLCJEZXN0aW5hdGlvbiBBZG1pbmlzdHJhdG9yIiwiR3JhcGhOYXZpZ2F0b3IuVmlld2VyIiwiUHJvY2Vzc0F1dG9tYXRpb25BZG1pbiIsIkF1dGhHcm91cC5Db250ZW50LkFkbWluIiwiSU5UQVNfQnVzaW5lc3NEb21haW5FeHBlcnQiLCJCdXNpbmVzc19BcHBsaWNhdGlvbl9TdHVkaW9fRXh0ZW5zaW9uX0RlcGxveWVyIiwiRVNCTWVzc2FnaW5nLnNlbmQiLCJTdWJhY2NvdW50IEFkbWluaXN0cmF0b3IiLCJCdXNpbmVzc19BcHBsaWNhdGlvbl9TdHVkaW9fQWRtaW5pc3RyYXRvciIsIkVudGVycHJpc2UgTWVzc2FnaW5nIEFkbWluaXN0cmF0b3IiLCJCQVNfQWRtaW5pc3RyYXRvciIsIkNJQVNJbnRlZ3JhdGlvbk1vbml0b3IiLCJQSV9CdXNpbmVzc19FeHBlcnQiLCJJTlRBU19JbnRlZ3JhdGlvbkFyY2hpdGVjdCIsImpqLXBvYy1jb2xsZWN0aW9uIiwiTWVzc2FnaW5nU2VuZCIsImlhZHYtY29udGVudC1kZXZlbG9wZXIiLCJNb2JpbGVBZG1pbiIsIkRvY3VtZW50X0luZm9ybWF0aW9uX0V4dHJhY3Rpb25fVUlfRG9jdW1lbnRfVmlld2VyIiwiT3BlbkNvbm5lY3RvcnNfVXNlciIsIkF1dGhHcm91cC5TZWxmU2VydmljZS5BZG1pbiIsIkRvY3VtZW50X0luZm9ybWF0aW9uX0V4dHJhY3Rpb25fVUlfRW5kX1VzZXIiLCJCdXNpbmVzc19BcHBsaWNhdGlvbl9TdHVkaW9fRGV2ZWxvcGVyIiwiQnVpbGRBcHBzX0FkbWluaXN0cmF0b3IiLCJBdXRoR3JvdXAuQVBJUG9ydGFsUmVnaXN0cmF0aW9uIiwiTGF1bmNocGFkX0V4dGVybmFsX1VzZXIiLCJJTlRBU19BZG1pbmlzdHJhdG9yIiwiUElfQWRtaW5pc3RyYXRvciIsIlByb2Nlc3NBdXRvbWF0aW9uUGFydGljaXBhbnQiLCJFbnRlcnByaXNlIE1lc3NhZ2luZyBEZXZlbG9wZXIiLCJEb2N1bWVudF9JbmZvcm1hdGlvbl9FeHRyYWN0aW9uX1VJX1RlbXBsYXRlc19BZG1pbiIsIkNvbm5lY3Rpdml0eSBhbmQgRGVzdGluYXRpb24gQWRtaW5pc3RyYXRvciIsImlhZHYtY29udGVudC1hZG1pbmlzdHJhdG9yIiwiQ0lBU0ludGVncmF0aW9uRXhwZXJ0IiwiQVBJUG9ydGFsLlNlcnZpY2UuQ2F0YWxvZ0ludGVncmF0aW9uIiwiU3ViYWNjb3VudCBTZXJ2aWNlIEFkbWluaXN0cmF0b3IiLCJTdWJhY2NvdW50IFZpZXdlciIsIkRNUyIsIkVudGVycHJpc2UgTWVzc2FnaW5nIFN1YnNjcmlwdGlvbiBBZG1pbmlzdHJhdG9yIiwiRW50ZXJwcmlzZSBNZXNzYWdpbmcgRGlzcGxheSIsIkJBU19EZXZlbG9wZXIiLCJBUElNYW5hZ2VtZW50LlNlbGZTZXJ2aWNlLkFkbWluaXN0cmF0b3IiLCJHcmFwaC5LZXlVc2VyIiwiSU5UQVNfRW50ZXJwcmlzZUFyY2hpdGVjdCIsIlBJTUFTX0FkbWluaXN0cmF0b3IiLCJJbnRlZ3JhdGlvbl9Qcm92aXNpb25lciIsIkNJQVNJbnRlZ3JhdGlvbkFkbWluIl19LCJnaXZlbl9uYW1lIjoiRXJpYyIsInhzLnVzZXIuYXR0cmlidXRlcyI6e30sImZhbWlseV9uYW1lIjoiQ2Fzc2FybyIsInN1YiI6IjM1MmZkMjQ3LTg4NTAtNDRhNC1iMTMxLWEzYmJkMzA3ZTA3YiIsInNjb3BlIjpbInM0LXByb3h5LW9yZy1udW1lbml0LWFwcGxpY2F0aW9uLXNhbmRib3gtc2FuZGJveCF0MTI5ODAxLmFkbWluIl0sImNsaWVudF9pZCI6InNiLXM0LXByb3h5LW9yZy1udW1lbml0LWFwcGxpY2F0aW9uLXNhbmRib3gtc2FuZGJveCF0MTI5ODAxIiwiY2lkIjoic2ItczQtcHJveHktb3JnLW51bWVuaXQtYXBwbGljYXRpb24tc2FuZGJveC1zYW5kYm94IXQxMjk4MDEiLCJhenAiOiJzYi1zNC1wcm94eS1vcmctbnVtZW5pdC1hcHBsaWNhdGlvbi1zYW5kYm94LXNhbmRib3ghdDEyOTgwMSIsImdyYW50X3R5cGUiOiJwYXNzd29yZCIsInVzZXJfaWQiOiIzNTJmZDI0Ny04ODUwLTQ0YTQtYjEzMS1hM2JiZDMwN2UwN2IiLCJvcmlnaW4iOiJzYXAuZGVmYXVsdCIsInVzZXJfbmFtZSI6ImVyaWMuY2Fzc2Fyb0BudW1lbml0LmNvbSIsImVtYWlsIjoiZXJpYy5jYXNzYXJvQG51bWVuaXQuY29tIiwiYXV0aF90aW1lIjoxNzA1NDA0MjAxLCJyZXZfc2lnIjoiY2Y0NDA3YjEiLCJpYXQiOjE3MDU0MDQyMDEsImV4cCI6MTcwNTQ0NzQwMSwiaXNzIjoiaHR0cHM6Ly9udW1lbml0LWFwcGxpY2F0aW9uLXNhbmRib3guYXV0aGVudGljYXRpb24udXMxMC5oYW5hLm9uZGVtYW5kLmNvbS9vYXV0aC90b2tlbiIsInppZCI6ImZiMGU3ZmZkLWY1MzctNDU4Yi05ODJmLWJlOGIzMWVkZjBjZiIsImF1ZCI6WyJzNC1wcm94eS1vcmctbnVtZW5pdC1hcHBsaWNhdGlvbi1zYW5kYm94LXNhbmRib3ghdDEyOTgwMSIsInNiLXM0LXByb3h5LW9yZy1udW1lbml0LWFwcGxpY2F0aW9uLXNhbmRib3gtc2FuZGJveCF0MTI5ODAxIl19.QsqePf3juLboQO9Tdm0OwD-ifd9_44GNXxdSHbWZuugbRuoK0dEiiFawboWZ6fwRrZh2q5Cn9ayrHYPsPD4v8oLLKuIP7xdpu6vAaQuLWbfhA1wC2NRMGaYAIFWlvQIAOYbngpTPVDLuEGyqQoLrQmGq0TeYKcWCbxiNZOS-kTEjluDhn2Vy4QYP4hLJaplD6eOy-pZS48uBy00sRraVD2DjV0AuHdW4C3valP44feE2XRMQuX8wyf8tHRpx1JAVf1skBueqGL0IGj86jx6SReHFN3oDz_Y95KQw7_iYlSMIVfhNkcb_CndUJa6-ATHT0bfgfYyQjysfpnCd8KYihQ";
    let blob = '25 50 44 46';
    let filename = 'pedido.pdf';
    let options = {
        extraction: {
            "headerFields": [
                "documentNumber",
                "taxId",
                "purchaseOrderNumber",
                "shippingAmount",
                "netAmount",
                "senderAddress",
                "senderName",
                "grossAmount",
                "currencyCode",
                "receiverContact",
                "documentDate",
                "taxAmount",
                "taxRate",
                "receiverName",
                "receiverAddress"
            ],
            "lineItemFields": [
                "description",
                "netAmount",
                "quantity",
                "unitPrice",
                "materialNumber"
            ]
        },
        clientId: "default",
        documentType: "invoice",
        receivedDate: "2023-12-14",
        enrichment: {}
    };


    const stats = fs.statSync("../TesteBenitez.pdf");
    const fileSizeInBytes = stats.size;    

    const formData = new FormData();

    //  Append tokenDIE into the formData
    formData.append('token', tokenDIE);

    //  Append upload details into the formData
    //formData.append('file', blob, filename);

    //  Append options parameters into the formData
    formData.append('options', JSON.stringify(options))

    // Request options
    const requestOptions = {
        method: 'POST',
        headers: {
        },
        body: formData
    }

    //console.log('checkpoint: before sending request')

    // Call CAP service
    let response = fetch(url, requestOptions);

    console.log(response.value);

    //console.log(response)
}

f3()