let data;

const datafn=()=>{
    return{
        setData(tdata){
            data = tdata
        },
        getData(){
            return data;
        }
    }
}

module.exports = datafn()

