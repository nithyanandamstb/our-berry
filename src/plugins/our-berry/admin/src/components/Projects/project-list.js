import React, {useState, useEffect} from 'react';
import pluginId from '../../pluginId';

import { 
    Grid, 
    Typography, 
    GridItem,
    Card,
    CardHeader,
    CardBody,
    CardCheckbox,
    CardAction,
    CardAsset,
    CardTimer,
    CardContent,
    CardBadge,
    CardTitle,
    CardSubtitle,
    Link
} from '@strapi/design-system';

const ProjectList = (props) => {    
    const [isLoading, setIsLoading] = useState(true);
    const [projectList, setProjectList] = useState([]);
    const getProjectList = () => {
        if(isLoading===false) setIsLoading(true);
        const axios = require('axios');
        axios.get(process.env.STRAPI_ADMIN_APIURL+'/'+process.env.STRAPI_ADMIN_PLUGIN_NAME+'/get-projects',{

        }).then(response => {
            setProjectList(response.data);
            setIsLoading(false);
        }).catch(error => {
            console.error(error);
        });
    }
    useEffect(() => {
        getProjectList();
    }, []);
    console.log("log",projectList);
    const pageUrl = "/plugins/"+pluginId+"/project/";
    if(isLoading) { return "Loading..."}
    return(
        <>
        {projectList &&
        <Grid gap={5}>
        {projectList.map((project, i) => <GridItem key={i} background="warning200" col={1}>
        <Card style={{
        width: '240px'
        }} id="third">
            <CardHeader>
                <CardAsset style={{"background-color":"#ffffff"}} src={project?.Client?.Logo?.url} />
            </CardHeader>
            <CardBody>
                <CardContent>
                <CardTitle>{project?.Project_Name}</CardTitle>
                <CardSubtitle>{project?.Stack}</CardSubtitle>
                </CardContent>
                <CardBadge>
                <Link to={pageUrl+project?.id}>...</Link>
                </CardBadge>
            </CardBody>
            </Card>
            </GridItem>)}
        </Grid>
        }
        </>
    )
}
export default ProjectList;