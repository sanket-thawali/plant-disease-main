import React from 'react'
import DiseaseInfoCard from '../components/DiseaseInfoCard'
import GeneratePdfFile from './GeneratePdfFile'

const DiseaseDetails = (props) => {
  const { predictedDiseaseData } = props;

  if (!predictedDiseaseData) {
    return <div>No disease data available.</div>;
  }

  return (
    <div className='disease-details'>
        <GeneratePdfFile data={predictedDiseaseData}/>
        <h1>Plant Name: {predictedDiseaseData.plant}</h1>
        <h2>Disease Name: {predictedDiseaseData.class_name}</h2>
        <DiseaseInfoCard title="Symptoms" data={predictedDiseaseData.symptoms ? Object.values(predictedDiseaseData.symptoms) : []} />
        <DiseaseInfoCard title="Causes" data={predictedDiseaseData.causes ? Object.values(predictedDiseaseData.causes) : []} />
        <DiseaseInfoCard title="Prevention" data={predictedDiseaseData.prevention ? Object.values(predictedDiseaseData.prevention) : []} />
        <DiseaseInfoCard title="Control" data={predictedDiseaseData.cure ? Object.values(predictedDiseaseData.cure) : []} />
    </div>
  )
}

export default DiseaseDetails
