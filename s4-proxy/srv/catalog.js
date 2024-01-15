module.exports = (srv)=>{
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
