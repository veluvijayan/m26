var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    data=JSON.parse(this.response)
       var res=data.forEach(element => {
   console.log('country name:'+element.name);
   console.log('capital:'+element.capital);
   console.log('flag:'+element.flag);     
    });
}