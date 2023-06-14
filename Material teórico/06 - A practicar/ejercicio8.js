const emailInput = document.getElementById('email');
    const edadInput = document.getElementById('edad');
    const tipoEmpleadoSelect = document.getElementById('tipo-empleado');
    const ventasContainer = document.getElementById('ventas-container');
    const cantidadVentasInput = document.getElementById('cantidad-ventas');
    const montoVendidoInput = document.getElementById('monto-vendido');
    const empleadosContainer = document.getElementById('empleados-container');
    const cantidadEmpleadosInput = document.getElementById('cantidad-empleados');
    const localesContainer = document.getElementById('locales-container');
    const cantidadLocalesInput = document.getElementById('cantidad-locales');
    const descripcionTextarea = document.getElementById('descripcion');
    const colorInput = document.getElementById('color');
    const turnoFieldset = document.getElementById('turno-fieldset');
    const turnoMananaInput = document.getElementById('turno-manana');
    const turnoTardeInput = document.getElementById('turno-tarde');
    const submitButton = document.querySelector('button[type="submit"]');
    const tablaEmpleados = document.getElementById('tabla-empleados');
    const tablaEmpleadosBody = tablaEmpleados.querySelector('tbody');

    emailInput.addEventListener('input', validarEmail);
    edadInput.addEventListener('input', validarEdad);
    tipoEmpleadoSelect.addEventListener('change', mostrarCamposSegunTipo);
    cantidadVentasInput.addEventListener('input', validarCantidadVentas);
    montoVendidoInput.addEventListener('input', validarMontoVendido);
    cantidadEmpleadosInput.addEventListener('input', validarCantidadEmpleados);
    cantidadLocalesInput.addEventListener('input', validarCantidadLocales);
    descripcionTextarea.addEventListener('input', validarDescripcion);
    colorInput.addEventListener('input', validarColor);
    turnoMananaInput.addEventListener('input', validarTurno);
    turnoTardeInput.addEventListener('input', validarTurno);

    function validarEmail() {
      const email = emailInput.value;
      const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      if (!regex.test(email)) {
        emailInput.classList.add('error');
        document.getElementById('email-error').textContent = 'Correo electrónico inválido.';
      } else {
        emailInput.classList.remove('error');
        document.getElementById('email-error').textContent = '';
      }
      verificarCampos();
    }

    function validarEdad() {
      const edad = parseInt(edadInput.value);
      if (isNaN(edad) || edad <= 0) {
        edadInput.classList.add('error');
        document.getElementById('edad-error').textContent = 'La edad debe ser un número mayor a 0.';
      } else {
        edadInput.classList.remove('error');
        document.getElementById('edad-error').textContent = '';
      }
      verificarCampos();
    }

    function mostrarCamposSegunTipo() {
      const tipoEmpleado = tipoEmpleadoSelect.value;
      if (tipoEmpleado === 'vendedor') {
        ventasContainer.style.display = 'block';
        empleadosContainer.style.display = 'none';
        localesContainer.style.display = 'none';
        turnoFieldset.style.display = 'none';
      } else if (tipoEmpleado === 'encargado') {
        ventasContainer.style.display = 'none';
        empleadosContainer.style.display = 'block';
        localesContainer.style.display = 'none';
        turnoFieldset.style.display = 'block';
      } else if (tipoEmpleado === 'supervisor') {
        ventasContainer.style.display = 'none';
        empleadosContainer.style.display = 'none';
        localesContainer.style.display = 'block';
        turnoFieldset.style.display = 'none';
      } else {
        ventasContainer.style.display = 'none';
        empleadosContainer.style.display = 'none';
        localesContainer.style.display = 'none';
        turnoFieldset.style.display = 'none';
      }
      verificarCampos();
    }

    function validarCantidadVentas() {
      const cantidadVentas = parseInt(cantidadVentasInput.value);
      if (isNaN(cantidadVentas) || cantidadVentas <= 0) {
        cantidadVentasInput.classList.add('error');
        document.getElementById('ventas-error').textContent = 'La cantidad de ventas debe ser mayor a 0.';
      } else {
        cantidadVentasInput.classList.remove('error');
        document.getElementById('ventas-error').textContent = '';
      }
      verificarCampos();
    }

    function validarMontoVendido() {
      const montoVendido = parseFloat(montoVendidoInput.value);
      if (isNaN(montoVendido) || montoVendido <= 0 || montoVendidoInput.value.indexOf('.') !== -1) {
        montoVendidoInput.classList.add('error');
        document.getElementById('monto-error').textContent = 'El monto total vendido debe ser mayor a 0 y no debe contener más de dos números decimales.';
      } else {
        montoVendidoInput.classList.remove('error');
        document.getElementById('monto-error').textContent = '';
      }
      verificarCampos();
    }

    function validarCantidadEmpleados() {
      const cantidadEmpleados = parseInt(cantidadEmpleadosInput.value);
      if (isNaN(cantidadEmpleados) || cantidadEmpleados < 5) {
        cantidadEmpleadosInput.classList.add('error');
        document.getElementById('empleados-error').textContent = 'La cantidad de empleados a cargo debe ser mayor o igual a 5.';
      } else {
        cantidadEmpleadosInput.classList.remove('error');
        document.getElementById('empleados-error').textContent = '';
      }
      verificarCampos();
    }

    function validarCantidadLocales() {
      const cantidadLocales = parseInt(cantidadLocalesInput.value);
      if (isNaN(cantidadLocales) || cantidadLocales < 2) {
        cantidadLocalesInput.classList.add('error');
        document.getElementById('locales-error').textContent = 'La cantidad de locales administrados debe ser mayor o igual a 2.';
      } else {
        cantidadLocalesInput.classList.remove('error');
        document.getElementById('locales-error').textContent = '';
      }
      verificarCampos();
    }

    function validarDescripcion() {
      const descripcion = descripcionTextarea.value.trim();
      const palabras = descripcion.split(' ').filter(palabra => palabra !== '');
      if (palabras.length < 5) {
        descripcionTextarea.classList.add('error');
        document.getElementById('descripcion-error').textContent = 'La descripción del desempeño general debe tener al menos 5 palabras.';
      } else {
        descripcionTextarea.classList.remove('error');
        document.getElementById('descripcion-error').textContent = '';
      }
      verificarCampos();
    }

    function validarColor() {
      const color = colorInput.value.trim();
      if (!color) {
        colorInput.classList.add('error');
      } else {
        colorInput.classList.remove('error');
      }
      verificarCampos();
    }

    function validarTurno() {
      const turno = turnoMananaInput.checked || turnoTardeInput.checked;
      if (!turno) {
        turnoFieldset.classList.add('error');
      } else {
        turnoFieldset.classList.remove('error');
      }
      verificarCampos();
    }

    function verificarCampos() {
      const camposValidos = [
        emailInput.checkValidity(),
        edadInput.checkValidity(),
        tipoEmpleadoSelect.checkValidity(),
        (!cantidadVentasInput || cantidadVentasInput.checkValidity()),
        (!montoVendidoInput || montoVendidoInput.checkValidity()),
        (!cantidadEmpleadosInput || cantidadEmpleadosInput.checkValidity()),
        (!cantidadLocalesInput || cantidadLocalesInput.checkValidity()),
        (!descripcionTextarea || descripcionTextarea.checkValidity()),
        colorInput.checkValidity(),
        (!turnoMananaInput || turnoMananaInput.checked || turnoTardeInput.checked)
      ];

      const todosLosCamposValidos = camposValidos.every(valido => valido);

      submitButton.disabled = !todosLosCamposValidos;
    }

    document.querySelector('form').addEventListener('submit', function(event) {
      event.preventDefault();

      const email = emailInput.value;
      const edad = edadInput.value;
      const tipoEmpleado = tipoEmpleadoSelect.value;
      const cantidadVentas = cantidadVentasInput.value || '';
      const montoVendido = montoVendidoInput.value || '';
      const cantidadEmpleados = cantidadEmpleadosInput.value || '';
      const cantidadLocales = cantidadLocalesInput.value || '';
      const descripcion = descripcionTextarea.value || '';
      const color = colorInput.value;
      const turno = turnoMananaInput.checked ? 'Mañana' : turnoTardeInput.checked ? 'Tarde' : '';

      const filaExistente = Array.from(tablaEmpleadosBody.children).find(fila => {
        const correoFila = fila.querySelector('td:nth-child(1)').textContent;
        return correoFila === email;
      });

      if (filaExistente) {
        filaExistente.querySelector('td:nth-child(2)').textContent = edad;
        filaExistente.querySelector('td:nth-child(3)').textContent = tipoEmpleado;
        filaExistente.querySelector('td:nth-child(4)').textContent = cantidadVentas;
        filaExistente.querySelector('td:nth-child(5)').textContent = montoVendido;
        filaExistente.querySelector('td:nth-child(6)').textContent = cantidadEmpleados;
        filaExistente.querySelector('td:nth-child(7)').textContent = cantidadLocales;
        filaExistente.querySelector('td:nth-child(8)').textContent = descripcion;
        filaExistente.querySelector('td:nth-child(9)').textContent = color;
      } else {
        const fila = document.createElement('tr');
        fila.innerHTML = `
          <td contenteditable="true">${email}</td>
          <td>${edad}</td>
          <td>${tipoEmpleado}</td>
          <td>${cantidadVentas}</td>
          <td>${montoVendido}</td>
          <td>${cantidadEmpleados}</td>
          <td>${cantidadLocales}</td>
          <td>${descripcion}</td>
          <td>${color}</td>
        `;
        tablaEmpleadosBody.appendChild(fila);
      }

      emailInput.value = '';
      edadInput.value = '';
      tipoEmpleadoSelect.value = '';
      cantidadVentasInput.value = '';
      montoVendidoInput.value = '';
      cantidadEmpleadosInput.value = '';
      cantidadLocalesInput.value = '';
      descripcionTextarea.value = '';
      colorInput.value = '';
      turnoMananaInput.checked = false;
      turnoTardeInput.checked = false;

      submitButton.disabled = true;
    });