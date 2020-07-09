<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <%
        String userId = request.getParameter("userId");
        String pass = request.getParameter("pass");
        String name = request.getParameter("userName");
        String age = request.getParameter("age");
    %>
    <table border="1">
        <tr>
            <td>아이디</td>
            <td><%=userId%></td>
        </tr>
        <tr>
            <td>이름</td>
            <td><%=name%></td>
        </tr>
        <tr>
            <td>나이</td>
            <td><%=age%></td>
        </tr>
    </table>
</body>
</html>