<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>고객 이름 목록</title>
</head>
<body>
    <h1>고객 이름 목록</h1>
    <table border="1">
        <tr>
            <th>고객명</th>
        </tr>
        <c:forEach var="cust" items="${customerList}">
            <tr>
                <td><a href="<c:url value='/custForm' />?CUST_SN=${cust.cust_sn}">${cust.cust_nm}</a></td>
            </tr>
        </c:forEach>
    </table>
    <form action="<c:url value='/new' />" method="post">
		<button type="submit">신규</button>
	</form>
</body>
</html>
