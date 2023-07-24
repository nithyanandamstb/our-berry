import React, {useState, useEffect} from 'react';
import pluginId from '../../pluginId';
import CustomCss from '../../custom.css'
import EnableComp from './enable-comp';

import { 
    Box,
    Typography,
    TwoColsLayout,
    Grid,
    GridItem,
    Initials,
    Flex
} from '@strapi/design-system';

const ProjectDetail = (props) => {
    const [projectDetails, setProjectDetails] = useState([]);
    const teams = ['Account_Manager','Support_Manager','Lead_Developer','Lead_Designer','SEO_Manager'];
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
        console.log("log",teams);
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
                    <GridItem col={4} s={12}>
                        <Typography variant="delta">Project Name: </Typography>
                        <Typography variant="epsilon">{projectDetails?.Project_Name}</Typography>                        
                    </GridItem>
                    <GridItem col={4} s={12}>
                        <Typography variant="delta">Client Name: </Typography>
                        <Typography variant="epsilon">{projectDetails?.Client?.Client_Name}</Typography>
                    </GridItem>
                    <GridItem col={4} s={12}>
                        <Typography variant="delta">Sector: </Typography>
                        <Typography variant="epsilon">{projectDetails?.Sector}</Typography>
                    </GridItem>
                    <GridItem col={4} s={12}>
                        <Typography variant="delta">CRM: </Typography>
                        <Typography variant="epsilon">{projectDetails?.crm?.CRM}</Typography>
                    </GridItem>                   
                    <GridItem col={4} s={12}>
                        <Typography variant="delta">CRM Access: </Typography>
                        <Typography variant="epsilon">{projectDetails?.crm?.CRM_Access}</Typography>
                    </GridItem>
                    <GridItem col={4} s={12}>
                        <Typography variant="delta">Stack: </Typography>
                        <Typography variant="epsilon">{projectDetails?.Stack}</Typography>
                    </GridItem>                    
                    <GridItem col={4} s={12}>
                        <Typography variant="delta">SEO: </Typography>
                        <Typography variant="epsilon">{<EnableComp mode={projectDetails?.SEO} />}</Typography>
                    </GridItem>
                    <GridItem col={4} s={12}>
                        <Typography variant="delta">Support Hrs: </Typography>
                        <Typography variant="epsilon">{projectDetails?.Support_Hrs}</Typography>
                    </GridItem>
                    <GridItem col={4} s={12}>
                        <Typography variant="delta">Active: </Typography>
                        <Typography variant="epsilon">{<EnableComp mode={projectDetails?.Active} />}</Typography>
                    </GridItem>
                </Grid>
            </div>
            <Grid className="section inner-section" gap={{
                    desktop: 1,
                    tablet: 2,
                    mobile: 1
                }}>
                {projectDetails?.Contact_Info &&
                    <GridItem col={3} s={12}>
                        <div className="title"> 
                            <Typography variant="beta" className="sub-title">Contact Info</Typography>
                        </div>
                            <Grid gap={{
                                desktop: 1,
                                tablet: 2,
                                mobile: 1
                            }}>
                                {projectDetails && projectDetails?.Contact_Info.map((ci, ciid)=> ci && 
                                    <GridItem col={12} s={12}>
                                        <Typography variant="omega" fontWeight="semiBold">{ci?.Person_Name}: </Typography>
                                        <Typography variant="pi"><a href={"mailto:"+ci?.Email_Id}>{ci?.Email_Id}</a></Typography>                        
                                    </GridItem>
                                )
                                }
                            </Grid>
                    </GridItem>
                }
                {projectDetails?.Site_Url &&
                    <GridItem col={4} s={12}>
                        <div className="title"> 
                            <Typography variant="beta" className="sub-title">Channel Info</Typography>
                        </div>
                            <Grid gap={{
                                desktop: 1,
                                tablet: 2,
                                mobile: 1
                            }}>
                                {projectDetails && projectDetails?.Site_Url.map((ci, ciid)=> ci && 
                                    <GridItem col={12} s={12}>
                                        <Typography variant="omega" fontWeight="semiBold">{ci?.Name}: </Typography>
                                        <Typography variant="pi"><a href={"mailto:"+ci?.Link}>{ci?.Link}</a></Typography>                        
                                    </GridItem>
                                )
                                }
                            </Grid>
                    </GridItem>
                }
                {projectDetails?.Channel_Info &&
                    <GridItem col={5} s={12}>
                        <div className="title"> 
                            <Typography variant="beta" className="sub-title">Site URL</Typography>
                        </div>
                            <Grid gap={{
                                desktop: 1,
                                tablet: 2,
                                mobile: 1
                            }}>
                                {projectDetails && projectDetails?.Channel_Info.map((ci, ciid)=> ci && 
                                    <GridItem col={12} s={12}>
                                        <Typography variant="omega" fontWeight="semiBold">{ci?.Name}: </Typography>
                                        <Typography variant="pi"><a href={"mailto:"+ci?.Link}>{ci?.Link}</a></Typography>                        
                                    </GridItem>
                                )
                                }
                            </Grid>
                    </GridItem>
                }
            </Grid>
            <Grid className="section inner-section" gap={{
                    desktop: 1,
                    tablet: 2,
                    mobile: 1
                }}>
                {teams && 
                    <GridItem col={3} s={12}>
                        <div className="title"> 
                            <Typography variant="beta" className="sub-title">Teams Info</Typography>
                        </div>
                            <Grid gap={{
                                desktop: 1,
                                tablet: 2,
                                mobile: 1
                            }}>
                                {teams.map((ci, ciid)=> ci && 
                                    <GridItem col={12} s={12}>
                                        <Flex>
                                        <Typography variant="pi" fontWeight="semiBold">{ci?.replace("_"," ")+": "}</Typography>                                        
                                        <Typography variant="pi">{projectDetails[ci]?.username}</Typography>
                                        </Flex>
                                    </GridItem>
                                )
                                }
                            </Grid>
                    </GridItem>
                }
                {projectDetails?.DevOps_Deatils &&
                    <GridItem col={4} s={12}>
                        <div className="title"> 
                            <Typography variant="beta" className="sub-title">DevOps Info</Typography>
                        </div>
                            <Grid gap={{
                                desktop: 1,
                                tablet: 2,
                                mobile: 1
                            }}>
                                {projectDetails && projectDetails?.DevOps_Deatils.map((ci, ciid)=> ci && 
                                    <GridItem col={12} s={12}>
                                        <Typography variant="pi" fontWeight="">{ci?.Name}: </Typography>
                                        <Typography variant="pi">{ci?.Value}</Typography>                        
                                    </GridItem>
                                )
                                }
                            </Grid>
                    </GridItem>
                }
                {projectDetails?.Key_Features &&
                    <GridItem col={5} s={12}>
                        <div className="title"> 
                            <Typography variant="beta" className="sub-title">Key Features</Typography>
                        </div>
                            <Grid gap={{
                                desktop: 1,
                                tablet: 2,
                                mobile: 1
                            }}>
                                {projectDetails && projectDetails?.Key_Features.map((ci, ciid)=> ci && 
                                    <GridItem col={12} s={12}>
                                        <Typography variant="omega" fontWeight="semiBold">{ci?.Name}: </Typography>
                                        <Typography variant="pi">{<EnableComp mode={ci?.Enable} />}</Typography>                        
                                    </GridItem>
                                )
                                }
                            </Grid>
                    </GridItem>
                }
            </Grid>
            
            
        </Box>
        }
        </>
    )
}
export default ProjectDetail;