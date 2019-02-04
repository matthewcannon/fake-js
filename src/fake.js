const requirejs = {
    providing: (name, module) => (requested, func) => {
        if (requested === name) {
            func(module);
        }
    },
};

export { requirejs };
