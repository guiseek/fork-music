SELECT
    a.id, 
    CONCAT(a.first_name, ' ', a.last_name) AS instructor_name,
    a.number_total,
    CONCAT(CONVERT(a.number_present / a.number_total * 100, DECIMAL(5,2)), '%') AS percentage,
    a.teach_outcome
FROM
(
SELECT
    instructor.id, 
    instructor.first_name, 
    instructor.last_name, 
    SUM(CASE WHEN instructor_presence.present = True THEN 1 ELSE 0 END) AS number_present,
    COUNT(DISTINCT classroom_schedule.id) AS number_total,
    teach_outcome.outcome_text AS teach_outcome
FROM classroom
    INNER JOIN teach ON classroom.id = teach.classroom_id
    INNER JOIN instructor ON teach.instructor_id = instructor.id
    LEFT JOIN classroom_schedule ON classroom_schedule.classroom_id = classroom.id
    LEFT JOIN instructor_presence ON instructor_presence.instructor_id = instructor.id AND instructor_presence.classroom_schedule_id = classroom_schedule.id
    LEFT JOIN teach_outcome ON teach_outcome.id = teach.teach_outcome_id
WHERE classroom.id = @id_classroom
GROUP BY
    instructor.id, 
    instructor.first_name, 
    instructor.last_name, 
    teach_outcome.outcome_text
) a 