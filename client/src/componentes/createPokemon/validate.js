export const validate = (target, dispatchError) => {
  const formName = target.name;
  const formValue = target.value;
  let success = true;

  dispatchError({ type: formName, value: '' });

  if (formName === 'name') {
    if (formValue.length === 0) {
      success = false;
      dispatchError({ type: formName, value: 'El valor es requerido' });
    } else if (!/^[a-zA-Z\s]*$/.test(formValue)) {
      success = false;
      dispatchError({
        type: formName,
        value: 'Nombre invalido - *Solo letras (A-Z)*',
      });
    }
  }

  if (formName === 'picture') {
    if (formValue.length === 0) {
      success = false;
      dispatchError({ type: formName, value: 'El valor es requerido' });
    }
  }

  if (formName === 'hp') {
    const hp = Number(formValue);

    if (formValue.length === 0) {
      success = false;
      dispatchError({ type: formName, value: 'El valor es requerido' });
    } else if (Number.isNaN(hp)) {
      success = false;
      dispatchError({ type: formName, value: 'El valor debe ser numérico' });
    } else if (formValue < 0) {
      success = false;
      dispatchError({ type: formName, value: 'El valor debe ser mayor a 0' });
    }
  }

  if (formName === 'attack') {
    const attack = Number(formValue);

    if (formValue.length === 0) {
      success = false;
      dispatchError({ type: formName, value: 'El valor es requerido' });
    } else if (Number.isNaN(attack)) {
      success = false;
      dispatchError({ type: formName, value: 'El valor debe ser numérico' });
    } else if (formValue < 0) {
      success = false;
      dispatchError({ type: formName, value: 'El valor debe ser mayor a 0' });
    }
  }

  if (formName === 'defense') {
    const defense = Number(formValue);

    if (formValue.length === 0) {
      success = false;
      dispatchError({ type: formName, value: 'El valor es requerido' });
    } else if (Number.isNaN(defense)) {
      success = false;
      dispatchError({ type: formName, value: 'El valor debe ser numérico' });
    } else if (formValue < 0) {
      success = false;
      dispatchError({ type: formName, value: 'El valor debe ser mayor a 0' });
    }
  }

  if (formName === 'speed') {
    const speed = Number(formValue);

    if (formValue.length === 0) {
      success = false;
      dispatchError({ type: formName, value: 'El valor es requerido' });
    } else if (Number.isNaN(speed)) {
      success = false;
      dispatchError({ type: formName, value: 'El valor debe ser numérico' });
    } else if (formValue < 0) {
      success = false;
      dispatchError({ type: formName, value: 'El valor debe ser mayor a 0' });
    }
  }

  if (formName === 'height') {
    const height = Number(formValue);

    if (formValue.length === 0) {
      success = false;
      dispatchError({ type: formName, value: 'El valor es requerido' });
    } else if (Number.isNaN(height)) {
      success = false;
      dispatchError({ type: formName, value: 'El valor debe ser numérico' });
    } else if (formValue < 0) {
      success = false;
      dispatchError({ type: formName, value: 'El valor debe ser mayor a 0' });
    }
  }

  if (formName === 'weight') {
    const weight = Number(formValue);

    if (formValue.length === 0) {
      success = false;
      dispatchError({ type: formName, value: 'El valor es requerido' });
    } else if (Number.isNaN(weight)) {
      success = false;
      dispatchError({ type: formName, value: 'El valor debe ser numérico' });
    } else if (formValue < 0) {
      success = false;
      dispatchError({ type: formName, value: 'El valor debe ser mayor a 0' });
    }
  }

  return success;
};
