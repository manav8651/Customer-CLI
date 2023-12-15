const mongoose=require('mongoose');
const Customer=require('./models/customer');


mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/customercli',{
    // useNewUrlParser: true, useUnifiedTopology: true
});

// mongoose.set('bufferCommands', false); // Disable command buffering
// mongoose.set('bufferTimeoutMS', 0);   // Set buffer timeout to 0 to disable buffering timeout



const addCustomer=async (customer)=>{
    // Customer.create(customer).then(customer=>{
    //     console.info('New Customer Added');
    //     mongoose.connection.close();//or else db's gonna hang
    // })
    try{
        await Customer.create(customer);
        console.info("New Customer Added");
    }
    catch(err){
        console.info(err)
    }
    finally{
        mongoose.connection.close();
    }
    
}

const findCustomer=async (name)=>{
    
    // Customer.find({$or:[{firstname:search},{lastname:search}]}).then(
    //     customer=>{
    //         console.info(customer);
    //         console.info(`${customer.length} matches`)
    //         mongoose.connection.close();
    //     }
    // )
    try{
        const search=new RegExp(name,'i');
        const customer=await Customer.find({$or:[{firstname:search},{lastname:search}]})
        console.info(customer);
        console.info(`${customer.length} matches`)
    }
    catch(error){
        console.error(error.message)
    }
    finally{
        mongoose.connection.close();
    }
}

const updateCustomer= async (_id, customer)=>{
    // Customer.update({_id}, customer).then(customer=>{
    //     console.info("Customer updated")
    //     mongoose.connection.close();
    // })
    try{
        await Customer.update({_id}, customer);
        console.info("Customer updated")
    }
    catch(error){
        console.info(error.message);
    }
    finally{
        mongoose.connection.close();
    }
}

const removeCustomer= async (_id)=>{
    try{
        await Customer.deleteOne({_id})
        console.info("Customer removed")
    }
    catch(error){
        console.info(error.message);
    }
    finally{
        mongoose.connection.close();
    }
}


const listCustomers= async ()=>{
    try{
        const customers= await Customer.find();
        console.info(customers);
        console.info(customers.length);
    }
    catch(error){
        console.info(error.message);
    }
    finally{
        mongoose.connection.close();
    }
}

module.exports={
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomers,

}