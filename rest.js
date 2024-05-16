const sample = (a, b, ...args) => {
    console.log(a, b)
    args.forEach(x => {
        console.log(args)
    })
    console.log(typeof args)
};
sample(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)