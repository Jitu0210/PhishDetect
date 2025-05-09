class ApiResponse{
    constructor(statuscode,message="success",data=[]){
        this.statuscode=200
        this.success=statuscode<400
        this.error=false
    }
}