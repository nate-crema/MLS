export default function (obj) {
    const { store, error, req, res } = obj;
    console.log(`auth middleware: ${JSON.stringify(store.state)}`);
    if (Object.keys(store.state.userInfo).length < 1) {
        // obj.error({
        //     message: 'Not Logined',
        //     statusCode: 403
        // })
        // console.log(Object.keys(res));
        res.end(`
        <html><script>location.href = "/"</script></html>`);
    }
}
  