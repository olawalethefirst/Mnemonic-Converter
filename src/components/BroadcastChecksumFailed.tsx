import {useContext} from 'react';
import ModalContainer from './ModalContainer';
import ModalTitle from './ModalTitle';
import ModalButton from './ModalButton';
import ModalText from './ModalText';
import {MnemonicContext} from '../Providers/MnemonicProvider/MnemonicProvider';
import constants from '../constants';

export default function BroadcastChecksumFailed() {
  const {
    mnemonicState: {broadcastChecksumFailedVisible},
    overrideChecksumFailed,
    closeBroadcastChecksumFailed,
    onBroadcastChecksumFailedHide,
  } = useContext(MnemonicContext);

  return (
    <ModalContainer
      isVisible={broadcastChecksumFailedVisible}
      dismissModal={closeBroadcastChecksumFailed}
      onModalHide={onBroadcastChecksumFailedHide}>
      <ModalTitle title={constants.modalTitles.checksumFailed} />
      <ModalText text="Do you want to proceed with translation?" />
      <ModalButton onPress={overrideChecksumFailed} title="Yes" submitType />
      <ModalButton onPress={closeBroadcastChecksumFailed} title="No" />
    </ModalContainer>
  );
}
