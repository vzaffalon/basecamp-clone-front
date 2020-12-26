import React,{ useState, useEffect, createRef } from 'react';
import styled from 'styled-components';
import { PrimaryButton, AlignCenter } from 'AppStyles'
import { Column, Row } from 'AppStyles';
import { Project, Document } from 'models/index.js';
import { useHistory, useParams } from "react-router-dom";
import { TextField, Breadcrumbs, Link, Typography, Button, Card, CardContent, CardActions, GridList, Grid } from '@material-ui/core';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import api from 'models/ApiConsts.js';
import Dropzone from 'react-dropzone'
import { useFieldArray, useForm } from "react-hook-form";
import GetAppIcon from '@material-ui/icons/GetApp';

function DocumentsListScreen() {
    let history = useHistory();
    let params = useParams();
    const [documents, setDocuments] = useState([])
    const [show_file_creation_list, setShowFileCreationList] = useState(false)
    const [files_in_creation, setFilesInCreation] = useState([])
    const dropzoneRef = createRef()

    const { register, control, handleSubmit, reset, trigger, setError } = useForm({
        // defaultValues: {}; you can populate the fields by this attribute 
    });


    useEffect(() => {
        getDocuments();
    },[])

    const getDocuments = () => {
        const { id } = params
        Document.list({project_id: id}).then((response) => {
            setDocuments(response.data)
        })
    }

    const showFileCreationList = (acceptedFiles) => {
        debugger;
        setFilesInCreation(acceptedFiles);
        setShowFileCreationList(true)
    }

    const createDocuments = (values) => {
        let promises = []
        files_in_creation.forEach(function (item, index) {
            promises.push(createFile(values.file_in_creation[index],item))
        });
        setFilesInCreation([])
        setShowFileCreationList(false)

        Promise.all(promises).then((values) => {
           getDocuments();
        })
    }

    const createFile = async (value, file_in_creation) => {
        const { id } = params
        debugger;
        return Document.create(
            file_in_creation,
          {
              name: value.name,
              notes: value.notes,
              project_id: id,
          },
          (progressEvent, fileX) => {
            // updateProgressCallback(progressEvent, fileX);
          },
          (error) => {
          }
        );
    
        // updateProgressCallback({ finishedLoading: true }, fileObject);
        // if (created_file) {
        //   created_file.uploaded = true;
        //   created_file.file_upload_id = created_file.id;
        //   files.push(created_file);
        // }
    
        // return created_file;
      };
    
    //   const updateProgressCallback = (progressEvent, fileX) => {
    //     var percentFraction = 0;
    //     var percent = 0;
    //     if (progressEvent.finishedLoading) {
    //       percent = 100;
    //     } else {
    //       percentFraction = progressEvent.loaded / progressEvent.total;
    //       percent = Math.floor(percentFraction * 100);
    //       if (percent > 95) {
    //         percent = 95;
    //       }
    //     }
    
    //     var files = [...order_files];
    //     var file = files.find((file) => file.id == fileX.id);
    //     file.percent = percent;
    //   };


    return (
        <AlignCenter>
            <MenuCard>
                <BreadcrumbBottomBorder>
                        <Breadcrumbs aria-label="breadcrumb">
                                <Link color="inherit" onClick={() => {history.goBack(); history.goBack();}}>
                                    Projetos
                                </Link>
                                <Link color="inherit" onClick={() => {history.goBack();}}>
                                    Menu
                                </Link>
                                <Typography color="textPrimary">Arquivos</Typography>
                        </Breadcrumbs>
                    </BreadcrumbBottomBorder>
                <RowCenter>
                    <LeftMarginButton>
                        <ProjectTitle>Arquivos</ProjectTitle>
                    </LeftMarginButton>
                    <LeftMarginButton>
                        <Button size="small" onClick={() => {dropzoneRef.current.open()}} variant="contained" color="primary">
                            Adicionar
                        </Button>
                    </LeftMarginButton>
                </RowCenter>
                <AlignCenter>
                    <LineDivider></LineDivider>
                </AlignCenter>

                {show_file_creation_list && <form onSubmit={handleSubmit(createDocuments)}>
                                    {files_in_creation.map((file_in_creation, index) => {
                                         return <div>
                                            <AlignCenter>
                                            <TextFieldMargin>
                                                <TextFieldMargin>
                                                    <img src={file_in_creation.path} alt="file" width="80" height="80"></img>
                                                </TextFieldMargin>
                                            </TextFieldMargin>
                                            </AlignCenter>
                                            <TextFieldMargin>
                                                <TextField fullWidth id="standard-basic" label="Nome" id="name" name={`file_in_creation[${index}].name`} inputRef={register({ required: true })} variant="outlined"
                                                    size="small" defaultValue={file_in_creation.name} />
                                            </TextFieldMargin>
                                            <TextFieldMargin>
                                                <TextField fullWidth id="standard-basic" label="Notas" id="name" name={`file_in_creation[${index}].notes`} inputRef={register({ required: false })} variant="outlined"
                                                    size="small"  />
                                            </TextFieldMargin>
                                        </div>

                                    })}
                                      <Button type="submit" variant="contained" color="primary">
                                                Salvar
                                        </Button>
                                </form>}

           
                           
                           
                            {documents.length > 0 &&
                             <Grid container spacing={1}>
                                {documents.map((document) => {
                                    const { name, notes, url } = document
                                    return  <Grid item xs={6}><CardSize>
                                                <CardContent>
                                                        <img src={api.uri + url} alt="Girl in a jacket" width="100" height="100"></img>
                                                        <FileName>{name}</FileName>
                                                        {notes && <FileNotes>{notes}</FileNotes>}
                                                </CardContent>
                                                {/* <CardActions>
                                                    <Button size="small">Learn More</Button>
                                                </CardActions> */}
                                                <a href={api.uri + url} target="_blank" rel="noopener noreferrer" download>
                                                <GetAppIcon></GetAppIcon>
                                                </a>
                                            </CardSize></Grid>
                                    })}
                                </Grid>
                     
                    }

<Dropzone ref={dropzoneRef} onDrop={acceptedFiles => showFileCreationList(acceptedFiles)}>
                                {({getRootProps, getInputProps}) => (
                                    documents.length === 0 && <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <div style={{marginTop: "10px"}}>Arraste seus arquivos aqui para adicionar-los no projeto.</div>
                                        </div>
                        </section>)
                            }
                            </Dropzone>
               
            
        </MenuCard>
    </AlignCenter>
    );
}

const FileName = styled.div`
    font-size: 14px;
    margin-top: 10px;
    font-weight: 600;
`

const FileNotes = styled.div`
    font-size: 12px;
    margin-top: 5px;
    font-weight: 500;
`

const CardSize = styled(Card)`
    margin-top: 15px;
    height: 230px;
`

const TextFieldMargin = styled.div`
    margin-bottom: 20px;
    margin-top: 10px;
    text-align: left;
`

const BreadcrumbBottomBorder = styled.div`
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0,0,0,0.03);
`

const AddEventLabel = styled.div`
    text-align: left;
    font-weight: normal;
    text-transform: uppercase;
    font-size: 12px;
    margin-top: 15px;
    margin-bottom: 15px;
`


const DescriptionLabel = styled.div`
    font-weight: normal;
    font-size: 16px;
    margin-top: 15px;
    font-weight: 600;
`



const DayLabel = styled.div`
    text-align: left;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 0.85em;
    margin-top: 20px;
    color: #6d6d6d;
`

const NameLabel = styled.div`
    text-align: left;
    font-size: 0.95em;
    margin-top: 5px;
    font-weight: 500;
`


const LeftMarginButton = styled.div`
    margin-left: 10px;
`

const RowCenter = styled(Row)`
    align-items: center;
    justify-content: center;
`


const Input = styled.input`
    margin-top: 10px;
    margin-bottom: 10px;
    max-width: 100%;
    width: 100%;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 0.4rem;
    line-height: 1.5;
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
    color: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    box-sizing: border-box;
`


const MessageTitle = styled.div`
    font-size: 18px;
    color: #283C46;
    font-weight: 700;
    text-align: left;
    margin-top: 20px;
    margin-bottom: 5px;
    margin-left: 10px;
`;

const MessageDescription = styled.div`
    font-size: 18px;
    color: #283C46;
    font-weight: 300;
    word-wrap: break-word;
    text-align: left;
    margin-left: 10px;
    margin-bottom: 10px;
`;

const MessageDivider = styled.div`
    height: 1px;
    background-color: #f2f2f2;
`

const LineDivider = styled.div`
    width: 90%;
    height: 3px;
    background-color: #283c46;
`


const MenuCard = styled(Card)`
    padding: 15px;
    min-height: 400px;
    margin: 20px;
    width: 100%;

    @media(min-width: 800px) {
        margin-top: 40px;
        width: 600px;
        width: 800px;
        height: 800px;
    }
`

const ToolCard = styled(Card)`
        position: relative;
        width: 240px;
        height: 240px;
        margin: 2%;
        vertical-align: top;
        font-size: 1.1rem;
        line-height: 1.3;
        text-align: left;
        text-rendering: optimizeLegibility;
        word-wrap: break-word;
        background: #fff;
`;

const ProjectTitle = styled.div`
    font-size: 22px;
    color: #283C46;
    font-weight: 700;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const ToolTitle = styled.div`
    font-size: 18px;
    color: #283C46;
    font-weight: 700;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export default DocumentsListScreen