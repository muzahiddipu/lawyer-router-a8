const getStoreLawyer = ()=>{
    const storedLawyerSTR = localStorage.getItem("lawyerList");

    if(storedLawyerSTR){
        const storedLawyerData = JSON.parse(storedLawyerSTR);
        return storedLawyerData;
    }
    else{
        return [];
    }
}

const addToStoreDB = (id)=>{
    const storedLawyerData= getStoreLawyer();

    if(storedLawyerData.includes(id)){
        console.log("hello");
        
        alert("this id already exist")
        
    }
    else{
        storedLawyerData.push(id);
        const data = JSON.stringify(storedLawyerData);
        localStorage.setItem("lawyerList", data)

       
    }
}

export {addToStoreDB, getStoreLawyer}