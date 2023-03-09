import styled, {css}  from "styled-components";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: #222222;
`;

export const Header = styled.View`
  height: 45%;
`;

export const BackgroundHeader = styled.Image.attrs({
  blurRadius: 3,
})`

`;

export const ButtonClose = styled.TouchableOpacity`
  position: absolute;
  padding-top: 40px;
  padding-left: 20px;
`;

export const IconClose = styled(AntDesign)`
  font-size: 26px;
  color: #fff;
`;

export const InfosMovie = styled.View`
  /* justify-content: center; */
  align-items: center;
  /* flex-direction: row; */
  /* padding-left: 20px; */
`;

export const ImageArea = styled.Image`

`;

export const TitleAndDescription = styled.View`
  /* flex: 1; */
  flex-direction: column;
  padding-bottom: 20px;
`;

export const Title = styled.Text`
  padding-top: 10px;
  text-align: center;
  font-size: 28px;
  color: #fff;
  font-weight: bold;
  /* padding-bottom: 10px; */
`;

export const Assessment = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
`;

export const VoteAverage = styled.Text`
  font-size: 22px;
  color: #fff;
`;

export const StarIcon = styled(AntDesign)`
  align-items: center;
  font-size: 25px;
  color: #eead2d;
`;

export const AlignStar = styled.View`
  margin-right: 5px;
`;

export const ButtonFavorite = styled.TouchableOpacity`
  width: 145px;
  height: 30px;
  background-color: #fff;
  border-radius: 50px;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  justify-content: center;
  padding: 2px;
`;

export const IconStarButtonFavorite = styled(AntDesign)`
  color: #000;
  font-size: 20px;
`;

export const TextButtonFavorite = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-left: 16px;
`;

export const Synopsis = styled.View`
  padding: 0px 20px 0px 20px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  /* margin-top: 20px; */
`;

export const TiltleSynopsis = styled.Text`
  color: #fff;
  font-size: ${RFValue(24)}px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const OverviewSynopsis = styled.Text`
  color: #fff;
  font-size: ${RFValue(12)}px;
`;

export const ReleaseDateArea = styled.View`
flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 20px;
  margin-left: 20px;
`;

export const TitleReleaseDate = styled.Text`
  font-size: ${RFValue(14)}px;
  color: #fff;
  font-weight: bold;
`;

export const ReleaseDate = styled.Text`
  font-size: ${RFValue(14)}px;
  color: #fff;
  margin-left: 5px;
`;
