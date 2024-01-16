module.exports = (srv)=>{
    /*
    srv.after("*", async (each, req) => {
        if (req.res) {
            req.res.set("Access-Control-Allow-Origin", "*");
        }
    });
    */

    srv.on ('getHello', async (req)=> {
        let helloString = `Hello ${req.data.to}!!`;

        return helloString;
    })

    srv.on ('docPost1', async (req)=>{
        let params = {
            token: req.data.token,
            content1: req.data.content1,
            content2: req.data.content2
        }

        console.log(params);

        return 'Ok!';
    })

    srv.on ('docPost', async (req)=>{
        let params = {
            token: req.data.token,
            content1: req.data.content1,
            content2: req.data.content2
        }

        console.log(params);

        return 'Ok!';
    })
}
