import { ChangeEvent, FormEvent } from 'react';

/**
 * EventType interface
 */
export interface EventType {
  onClickButton: () => void;
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTextArea: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmitForm: (event: FormEvent<HTMLFormElement>) => void;
}
