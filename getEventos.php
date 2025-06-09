<?php
header('Content-Type: application/json');

$conexion = new mysqli("localhost", "root", "", "lia-bermudez");

if ($conexion->connect_error) {
    die(json_encode(["error" => "Error de conexión a la base de datos"]));
}

$resultado = $conexion->query("SELECT * FROM eventos");

$eventos = [];

while ($row = $resultado->fetch_assoc()) {
    $eventos[] = $row;
}

echo json_encode($eventos);

$conexion->close();
?>
