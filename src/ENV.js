export const ENVIRONMENT =
{
    SERVER_PORT: process.env.PORT || 3001,
    BD_URL_CONNECTION:
    {
        TESTING:'',
        DEVELOPING: 'mongodb+srv://gabriela:Admin12345@cluster0-3turt.mongodb.net/test?retryWrites=true',
        //PRODUCTION: ''
    },
    ROUTES_MAIN_MODULES:
    {
        INDEX:'/'
    }
}