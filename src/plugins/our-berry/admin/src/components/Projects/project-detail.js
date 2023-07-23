import React, {useState, useEffect} from 'react';
import pluginId from '../../pluginId';
import CustomCss from '../../custom.css'

import { 
    Box,
    Typography,
    TwoColsLayout,
    Grid,
    GridItem
} from '@strapi/design-system';

const ProjectDetail = (props) => {
    const [projectDetails, setProjectDetails] = useState([]);
    if(props.project_id) {
        const [isLoading, setIsLoading] = useState(true);        
        const getProjectDetail = () => {
            if(isLoading===false) setIsLoading(true);
            const axios = require('axios');
            axios.get(process.env.STRAPI_ADMIN_APIURL+'/'+process.env.STRAPI_ADMIN_PLUGIN_NAME+'/get-project-details',{
                params: {project_id:props.project_id}
            }).then(response => {
                setProjectDetails(response.data);
                setIsLoading(false);
            }).catch(error => {
                console.error(error);
            });
        }
        useEffect(() => {
            getProjectDetail();
        }, []);
        console.log("log",projectDetails);
    }
    return(
        <>
        {projectDetails && props.project_id &&
        <Box padding={8} className="project-details-box">
            <TwoColsLayout startCol={<Box padding={4}>
                <Typography variant="alpha">{projectDetails?.Slack_Channel}</Typography>
            </Box>} endCol={<Box padding={4} className="logo-box">
                <img src={projectDetails?.Logo?.url} className="logo"/>
            </Box>} />
            <div className='section'>
                <div className="title"> 
                    <Typography variant="beta" className="sub-title">Project Info</Typography>
                </div>
                <Grid gap={{
                    desktop: 1,
                    tablet: 2,
                    mobile: 1
                }}>
                    <GridItem col={6} s={12}>
                        <Typography variant="delta">Project Name: </Typography>
                        <Typography variant="epsilon">{projectDetails?.Project_Name}</Typography>                        
                    </GridItem>
                    <GridItem col={6} s={12}>
                        <Typography variant="delta">Client Name: </Typography>
                        <Typography variant="epsilon">{projectDetails?.Client?.Client_Name}</Typography>
                    </GridItem>                    
                    <GridItem col={6} s={12}>
                        <Typography variant="delta">CRM: </Typography>
                        <Typography variant="epsilon">{projectDetails?.crm?.CRM}</Typography>
                    </GridItem>
                    <GridItem col={6} s={12}>
                        <Typography variant="delta">Stack: </Typography>
                        <Typography variant="epsilon">{projectDetails?.Stack}</Typography>
                    </GridItem>

                    <GridItem col={6} s={12}>
                        <Typography variant="delta">CRM Access: </Typography>
                        <Typography variant="epsilon">{projectDetails?.crm?.CRM_Access}</Typography>
                    </GridItem>
                </Grid>
            </div>
            {projectDetails?.Contact_Info &&
            <div className='section inner-section'>
                <div className="title"> 
                    <Typography variant="beta" className="sub-title">Contact Info</Typography>
                </div>
                <Grid gap={{
                    desktop: 1,
                    tablet: 2,
                    mobile: 1
                }}>
                {projectDetails && projectDetails?.Contact_Info.map((ci, ciid)=> ci && 
                    <GridItem col={6} s={12}>
                        <Typography variant="delta">{ci?.Person_Name}: </Typography>
                        <Typography variant="epsilon"><a href={"mailto:"+ci?.Email_Id}>{ci?.Email_Id}</a></Typography>                        
                    </GridItem>
                )
                }
                </Grid>
            </div>
            }
        </Box>
        }
        </>
    )
}
export default ProjectDetail;