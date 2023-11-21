import React, {useState, useEffect} from 'react';
import {useDropzone} from 'react-dropzone';

const FileUpload = ({onPhotoUPload}) => {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [errors, setErrors] = useState([]);
    const formData = new FormData()
    const images = []
    const data = new FormData();
    const url = "/api/upload/4";





    useEffect(() => {

        if(uploadedFiles.length  > 0 ){

        for (let i = 0; i < uploadedFiles.length; i++) {
            formData.append('images[]', uploadedFiles[i], uploadedFiles[i].name);
        }

        // Send files to server
        axios.post(url, formData).then(res => {
            if(res?.data?.status=='failed'){

                const imgErrors = []
                for (let [key, value] of Object.entries(res.data.errors)) {
                    value.forEach((item) =>{
                        imgErrors.push(item)
                    })
                }
                setErrors(imgErrors);

            }else{

                onPhotoUPload(res?.data?.filename)
                setErrors([]);
            }
        })
            .catch(function (error) {
            // handle error

            //setUserRegErrors({usernameError: error.response.errors.username});
        })
            .then(function () {
                // always executed
            });
        }
    }, [uploadedFiles]);


    const {getRootProps, getInputProps} = useDropzone({
        onDrop: (acceptedFiles) => {
            setUploadedFiles(acceptedFiles);

        },
    });
//TO DO : Customize and Style this Drag and Drop to Upload box as you want🧑‍💻😊
    return (
        <>
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag and drop files here or click to browse.</p>
            <ul>
                {uploadedFiles.map((file) => (<li key={file.name}>{file.name}</li>))}
            </ul>

        </div>

            {errors.length > 0 && <>
            <h2 className="text-red-600">Errors</h2>
            <ul>
                {errors.map((message, index) => (<li className="text-red-600" key={index}>{message}   </li>))}
            </ul>
            </>
            }
        </>
    );
};
export default FileUpload;
