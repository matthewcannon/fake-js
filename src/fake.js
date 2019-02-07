const requirejs = {
    providing: modules => request => {
        let index = 0;
        do {
            var { module } = modules.find(item => item.name === request[index]);
            if (module) {
                request[index + 1](module);
            }
            index += 2;
        } while (index < request.length);
    },
};

export { requirejs };
