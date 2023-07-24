import React, {useState, useEffect} from 'react';
import pluginId from '../../pluginId';
import { useLocation, useParams } from "react-router-dom"

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
    const pageUrl = "/plugins/"+pluginId+"/project/";
    const [isLoading, setIsLoading] = useState(true);
    const [projectList, setProjectList] = useState([]);
    const getProjectList = async() => {
        console.log("log",props.search)
        if(isLoading===false) setIsLoading(true);
        const axios = require('axios');
        await axios.get(process.env.STRAPI_ADMIN_APIURL+'/'+process.env.STRAPI_ADMIN_PLUGIN_NAME+'/get-projects',{
            params: {search_keys:props.search}
        }).then(response => {
            setProjectList(response.data);
            setIsLoading(false);
        }).catch(error => {
            console.error(error);
        });
        return null;
    }
    useEffect(() => {
        getProjectList();
    }, [props]);
    console.log("log",projectList);
    
    if(isLoading) { return "Loading..."}
    return(
        <>
        {projectList ?
            <Grid gap={5}>
            {projectList.map((project, i) => 
                <GridItem col={3} s={12}>
                <Card style={{
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
                </GridItem>
                )}
            </Grid>
            :
            <Box paddingTop={2} paddingLeft={4}>
                <Typography variant="beta">No Records</Typography>
            </Box>
        }
        </>
    )
}
export default ProjectList;