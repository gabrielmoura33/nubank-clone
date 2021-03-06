import { StyleSheet, Animated } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView)`
  margin: 0 30px;
`;

export const Code = styled.View`
  overflow: hidden;
  background: #fff;
  padding: 10px;
  align-self: center;
`;

export const Nav = styled.View`
  margin-top: 30px;
  align-self: stretch;
`;

export const NavItem = styled.TouchableOpacity`
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.5);
  flex-direction: row;
  align-items: center;
  padding: 12px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.5);
`;

export const NavText = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-left: 20px;
`;
export const SignOutButtom = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
`;

export const SignOutButtomText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 10px;
`;
