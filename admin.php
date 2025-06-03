<?php
// Conexión a la base de datos
$conexion = new mysqli("localhost", "root", "", "lia-bermudez");
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}

// Si se envió el formulario, guardar nuevo evento
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $title = $_POST['title'];
    $date = $_POST['date'];
    $tipe = $_POST['tipe'];
    $description = $_POST['description'];
    $duration = $_POST['duration'];
    $place = $_POST['place'];
    $image = $_POST['image'];

    $stmt = $conexion->prepare("INSERT INTO eventos (title, date, tipe, description, duration, place, image) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss", $title, $date, $tipe, $description, $duration, $place, $image);
    $stmt->execute();
    $stmt->close();

    // Redirigir para evitar reenvío del formulario
    header("Location: admin.php");
    exit();
}

// Obtener todos los eventos
$result = $conexion->query("SELECT * FROM eventos ORDER BY date ASC");
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Administrador de Eventos</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 2rem;
        }
        h2 {
            margin-bottom: 1rem;
        }
        form {
            background: #f4f4f4;
            padding: 1rem;
            border-radius: 8px;
            max-width: 500px;
        }
        form input, form textarea {
            display: block;
            width: 100%;
            margin-bottom: 1rem;
            padding: 0.5rem;
        }
        table {
            margin-top: 2rem;
            border-collapse: collapse;
            width: 100%;
        }
        table, th, td {
            border: 1px solid #ccc;
        }
        th, td {
            padding: 0.5rem;
            text-align: left;
        }
    </style>
</head>
<body>

<h2>Crear Nuevo Evento</h2>
<form action="admin.php" method="post">
    <input type="text" name="title" placeholder="Título del evento" required>
    <input type="date" name="date" required>
    <input type="text" name="tipe" placeholder="Tipo de evento (Cine, Danza, etc.)" required>
    <textarea name="description" placeholder="Descripción del evento" required></textarea>
    <input type="text" name="duration" placeholder="Duración (Ej: 3 horas)" required>
    <input type="text" name="place" placeholder="Lugar" required>
    <input type="text" name="image" placeholder="Ruta de imagen (Ej: imagenes/evento1.jpg)" required>
    <button type="submit">Guardar Evento</button>
</form>

<h2>Eventos Existentes</h2>
<table>
    <thead>
        <tr>
            <th>Título</th>
            <th>Fecha</th>
            <th>Tipo</th>
            <th>Descripción</th>
            <th>Duración</th>
            <th>Lugar</th>
            <th>Imagen</th>
        </tr>
    </thead>
    <tbody>
        <?php while ($row = $result->fetch_assoc()): ?>
            <tr>
                <td><?= htmlspecialchars($row['title']) ?></td>
                <td><?= htmlspecialchars($row['date']) ?></td>
                <td><?= htmlspecialchars($row['tipe']) ?></td>
                <td><?= htmlspecialchars($row['description']) ?></td>
                <td><?= htmlspecialchars($row['duration']) ?></td>
                <td><?= htmlspecialchars($row['place']) ?></td>
                <td><?= htmlspecialchars($row['image']) ?></td>
            </tr>
        <?php endwhile; ?>
    </tbody>
</table>

</body>
</html>
