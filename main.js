const promise = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve('OK')}, 2000)
})

/*
 promise().then(response => {
 console.log(response)
 }).catch(err => err);
 */
async function execute() {
    const response = await promise();
    console.log(response)
}

execute()
