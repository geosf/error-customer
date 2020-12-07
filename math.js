class CustomError extends Error {
    constructor({message, data}){
        super(message);
        this.data = data;
    }
}

try {
    const name = 'Geovani Silva';

    const myError = new CustomError({
        data: {
            type: 'Server error'
        }
    });

  throw myError;

} catch (err) {

    console.log('Error: ', err);

} finally {

    console.log('Keep going...');

}