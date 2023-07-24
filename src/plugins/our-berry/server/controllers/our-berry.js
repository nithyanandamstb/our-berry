'use strict';

module.exports = ({ strapi }) => ({
  async get_projects(ctx) {
    var dashBoard = [];        
    try {
        let searchKeys = ctx?.query?.search_keys;
        let modelName = "api::project.project";
        let wQry = {Active: true};
        if(searchKeys!="All") {
          wQry["Slack_Channel"] = { $contains: searchKeys }
        }
        var subBoard = {}
        console.log(wQry)
        if(modelName){
          dashBoard = await strapi.db.query(modelName).findMany({
            select: ['id', 'Project_Name','Stack'],
            where: wQry,
            orderBy: { id: 'ASC' },
            populate: ['Client','Client.Logo'],
          });
        }   
        return await new Promise(resolve => {
            setTimeout(() => {
              resolve(dashBoard)
            }, 200)
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
            }, 200)
        });
    } catch (error) {
        ctx.throw(200, error);
    }        
  },
});
