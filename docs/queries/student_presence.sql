SELECT
    a.id, 
    CONCAT(a.first_name, ' ', a.last_name) AS student_name,
    a.number_total, 
    CONCAT(CONVERT(a.number_present / a.number_total * 100, DECIMAL(5,2)), '%') AS percentage,
    a.attendance_outcome
FROM
(
SELECT
    student.id, 
    student.first_name, 
    student.last_name, 
    SUM(CASE WHEN student_presence.present = True THEN 1 ELSE 0 END) AS number_present,
    COUNT(DISTINCT classroom_schedule.id) AS number_total,
    attendance_outcome.outcome_text AS attendance_outcome
FROM classroom
    INNER JOIN attend ON classroom.id = attend.classroom_id
    INNER JOIN student ON attend.student_id = student.id
    LEFT JOIN classroom_schedule ON classroom_schedule.classroom_id = classroom.id
    LEFT JOIN student_presence ON student_presence.student_id = student.id AND student_presence.classroom_schedule_id = classroom_schedule.id
    LEFT JOIN attendance_outcome ON attendance_outcome.id = attend.attendance_outcome_id
WHERE classroom.id = @id_classroom
GROUP BY
    student.id, 
    student.first_name, 
    student.last_name, 
    attendance_outcome.outcome_text
) a  