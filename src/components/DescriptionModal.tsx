import { Dispatch, SetStateAction, useState } from 'react';
import { Modal, Pressable, StyleSheet, TextInput } from 'react-native';
import { PillButton } from './PillButton';
import { astroColors } from '../constants/colors';
import { Row } from './Row';
import { AstroText } from './AstroText';

interface DescriptionModalProps {
  submitText: Dispatch<SetStateAction<string>>;
}

export function DescriptionModal({ submitText }: DescriptionModalProps) {
  const [visible, setVisible] = useState<boolean>(false);
  const [text, setText] = useState<string>('');

  const handleClose = () => {
    setVisible(false);
  };

  const handleSetText = () => {
    if (text.length > 0) {
      submitText(text);
    }
    handleClose();
  };

  const handleCancel = () => {
    setText('');
    handleClose();
  };

  return (
    <>
      <PillButton onPress={() => setVisible(true)} text="Lisa kirjeldus" />
      <Modal visible={visible} onRequestClose={handleCancel} transparent>
        <Pressable style={styles.container} onPress={handleCancel}>
          <Pressable style={styles.modalBox} onPress={() => null}>
            <Row>
              <AstroText>Lisa kirjeldus</AstroText>
            </Row>
            <Row>
              <TextInput numberOfLines={4} style={styles.textInput} multiline onChangeText={submitText} />
            </Row>
            <Row>
              <PillButton onPress={handleCancel} text="Tühista" />
              <PillButton onPress={handleSetText} text="Lisa" />
            </Row>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: astroColors.gray100translucent,
  },
  modalBox: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 12,
    gap: 8,
  },
  textInput: {
    flex: 1,
    height: 96,
    borderRadius: 8,
    padding: 8,
    backgroundColor: astroColors.brown400,
    color: astroColors.black,
  },
});
