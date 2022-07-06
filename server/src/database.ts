import { connect } from 'mongoose'

export async function startConnection() {
    const db = await connect('mongodb://localhost/fgpa',{
    //const db = await connect('mongodb+srv://r7:@Qq1w2e3r4t5y6u7@cluster0.q17em.mongodb.net/?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
    console.log('Database is connected');
}
