const getStoreDoctor = ()=>{
    const storedDoctorSTR = localStorage.getItem("doctorList");

    if(storedDoctorSTR){
        const storedDoctorData = JSON.parse(storedDoctorSTR);
        return storedDoctorData;
    }
    else{
        return [];
    }
}

const addToStoreDB = (id)=>{
    const storedDoctorData= getStoreDoctor();

    if(storedDoctorData.includes(id)){
        console.log("hello");
        
        alert("this id already exist")
        
    }
    else{
        storedDoctorData.push(id);
        const data = JSON.stringify(storedDoctorData);
        localStorage.setItem("doctorList", data)

       
    }
}

export {addToStoreDB, getStoreDoctor}