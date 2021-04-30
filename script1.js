var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    data=JSON.parse(this.response)
    console.log(data);
    var res=data.filter((item)=>{
        return item.region==='Asia';
    });
    console.log(res);

}