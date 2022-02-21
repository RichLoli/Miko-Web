const VueAxios = {
    install(app, instance) {
        if (this.installed) {
            return;
        }
        this.installed = true;

        if (!instance) {
            console.error('You have to install axios');
            return;
        }

        app.config.globalProperties.axios = instance;

        Object.defineProperties(app.config.globalProperties, {
            axios: {
                get: function get() {
                    return instance;
                }
            }
        });
    }
};

export {
    VueAxios,
}