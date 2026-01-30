const du ={
    faculty : ["science" , "business", "arts" , "social science"],
    department :{
        science : ["cse", "eee", 'phy', 'chemistry'],
        art : ['bangla', 'english', 'wrc' , 'ihc'],
        business : ['accounting', 'finance', 'ib'],
        social :{
            mcj : "media",
            sociology : "research"
        }
    }
}
console.log(du.department.business);
console.log (du.department.social.sociology);
du.department.business.push("marketing");
console.log(du.department.business);
console.log(du.department.social);
du.department.social.mcj = "media and tv";
console.log(du.department.social);

du.faculty[2] = "humanities";
console.log(du.faculty);
delete du.department.art;
console.log(du);

