'use strict';

module.exports = ({ strapi }) => ({
  async get_projects(ctx) {
    var dashBoard = [];        
    try {  
        let modelName = "api::project.project";
        let wQry = {};
        var subBoard = {}
        if(modelName){
          dashBoard = await strapi.db.query(modelName).findMany({
            select: ['id', 'Project_Name','Stack'],
            where: { Active: true },
            orderBy: { Project_Name: 'DESC' },
            populate: ['Client','Client.Logo'],
          });
        }   
        return await new Promise(resolve => {
            setTimeout(() => {
              resolve(dashBoard)
            }, 2000)
        });
    } catch (error) {
        ctx.throw(500, error);
    }        
  },
  async get_project_details(ctx) {
    var dashBoard = [];
    try {  
        let modelName = "api::project.project";
        let projectId = ctx?.query?.project_id;
        let wQry = {};
        var subBoard = {}
        if(modelName && projectId){
          dashBoard = await strapi.db.query(modelName).findOne({
            where: { Active: true, id:projectId },
            populate: true,
          });
        }   
        return await new Promise(resolve => {
            setTimeout(() => {
              resolve(dashBoard)
            }, 500)
        });
    } catch (error) {
        ctx.throw(500, error);
    }        
  },
});
