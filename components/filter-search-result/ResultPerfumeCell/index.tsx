import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { CellArea, PerfumeImage, PerfumeInformationArea, PerfumeName, PerfumeBrand, PerfumeBrandEnglish, } from './style';
import { useNavigation } from '@react-navigation/native';



type DATA = {
  perfumeName: string;
  brandName: string;
  brandNameEnglish: string
  perfumeId: Number;
};


const ResultPerfumeCell: React.FC<DATA> = ({ perfumeName, brandName, brandNameEnglish, perfumeId }) => {

  const navigation = useNavigation();
  const goToPerfumeDetailPAGE = () => {
    //@ts-ignore
    navigation.navigate("PerfumeDetail", { perfumeId: perfumeId })
  }


  return (
    <CellArea >
      <TouchableOpacity onPress={goToPerfumeDetailPAGE}>
        <PerfumeImage> 이미지 준비중입니다.</PerfumeImage>
        <PerfumeInformationArea>

          <PerfumeName>{perfumeName}</PerfumeName>
          <PerfumeBrand>{brandName}</PerfumeBrand>
          <PerfumeBrandEnglish>{brandNameEnglish}</PerfumeBrandEnglish>
        </PerfumeInformationArea>
      </TouchableOpacity>
    </CellArea>
  );
};

export default ResultPerfumeCell;