export class Global {

    // jsp Service Files
    public static BASE_PATH_JSP = 'http://localhost:8080/AssignmentDistribution/data/services';

    public static LOGIN_URL = Global.BASE_PATH_JSP + '/login/check-login.jsp';

    public static CHANGE_DEFAULT_PASS_URL = Global.BASE_PATH_JSP + '/faculty/change-default-pass.jsp';

    public static CHECK_REGNUMBER_URL = Global.BASE_PATH_JSP + '/register/check-regnumber.jsp';

    public static REGISTER_STUDENT = Global.BASE_PATH_JSP + '/register/student-register.jsp';

    public static REGISTER_FACULTY = Global.BASE_PATH_JSP + '/register/faculty-register.jsp';

    public static CHECK_FACULTY_MOBNUMBER_URL = Global.BASE_PATH_JSP + '/register/check-mobnumber.jsp';

    public static ALL_BRANCHES_URL = Global.BASE_PATH_JSP + '/branch/fetch-branches.jsp';

    public static ALL_BATCHES_URL = Global.BASE_PATH_JSP + '/batch/fetch-batches.jsp';

    public static ALL_SUBJECTS_URL = Global.BASE_PATH_JSP + '/subject/fetch-subjects.jsp';

    public static ADD_SUBJECT = Global.BASE_PATH_JSP + '/subject/add-subject.jsp';

    public static NEW_REGISTERED_STUDENTS_URL = Global.BASE_PATH_JSP + '/student/new-students.jsp';

    public static ALLOW_NEW_REGISTERED_STUDENTS = Global.BASE_PATH_JSP + '/student/allow-new-student.jsp';

    public static LINK_SUBJECTS_URL = Global.BASE_PATH_JSP + '/subject/link-subjects.jsp';

    public static FETCH_MODULES_URL = Global.BASE_PATH_JSP + '/modules/fetch-modules-by-batch-sem-subject.jsp';

    public static ADD_MODULES_URL = Global.BASE_PATH_JSP + '/modules/add-modules-by-batch-sem-subject.jsp';

    public static FETCH_SUBJECT_MODULES_URL = Global.BASE_PATH_JSP + '/modules/fetch-subject-modules-for-assignment.jsp';

    public static ASSIGN_ASSIGNMENT_URL = Global.BASE_PATH_JSP + '/assignment/assign-assignments.jsp';

    public static ALL_FACULTIES_URL = Global.BASE_PATH_JSP + '/faculty/fetch-all-faculties.jsp';

    public static ASSIGN_TEMP_ADMIN_URL = Global.BASE_PATH_JSP + '/faculty/assign-temp-admin.jsp';

    public static ALL_ADMIIN_FACULTIES_URL = Global.BASE_PATH_JSP + '/faculty/fetch-temp-admins.jsp';

    public static REMOVE_TEMP_ADMIN_URL = Global.BASE_PATH_JSP + '/faculty/remove-temp-admin.jsp';

    public static GET_FACULTY_BY_BRANCH_URL = Global.BASE_PATH_JSP + '/faculty/get-faculty-by-branch.jsp';

    public static CHECK_STUDENT_ASSIGNMENT_URL = Global.BASE_PATH_JSP + '/faculty/fetch-assignments.jsp';

    public static ASSIGN_SUBJECT_TO_FACULTY_URL = Global.BASE_PATH_JSP + '/faculty/assign-subject-to-faculty.jsp';

    public static FETCH_DOWNLOADED_ASSIGNMENT_URL = Global.BASE_PATH_JSP + '/assignment/check-downloaded-assignments.jsp';

    public static GET_ASSIGNED_SUBJECT_URL = Global.BASE_PATH_JSP + '/assignment/fetch-assingment-subject.jsp';


    public static FETCH_STUDENT_SUBJECTS_URL = Global.BASE_PATH_JSP + '/student/fetch-all-subjects.jsp';

    public static FETCH_STUDENT_ASSIGNMENT_URL = Global.BASE_PATH_JSP + '/student/fetch-assignment.jsp';

    public static SET_DOWNLOAD_LOG_URL = Global.BASE_PATH_JSP + '/download/download-logs.jsp';

    public static CHECK_UPLOAD_LOG_URL = Global.BASE_PATH_JSP + '/upload/upload-logs.jsp';

    public static UPLOAD_STUDENT_ASSIGNMENT_DB_URL = Global.BASE_PATH_JSP + '/assignment/student-upload-assignments.jsp';

    public static FETCH_SUBMITTED_ASSIGNMENT_URL = Global.BASE_PATH_JSP + '/assignment/check-uploaded-assignments.jsp';



    // PHP Service Files
    public static BASE_PATH_PHP = 'http://localhost/AssignmentDistribution/data/services';

    public static UPLOAD_ASSIGNMENT_FILE_URL = Global.BASE_PATH_PHP + '/uploadFile/upload-assignment-file.php';

    public static UPLOAD_STUDENT_ASSIGNMENT_FILE_URL = Global.BASE_PATH_PHP + '/uploadFile/upload-student-assignment-file.php';

}
