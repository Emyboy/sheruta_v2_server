const sendGrid = require('@sendgrid/mail');

sendGrid.setApiKey('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');
(() => {
    // static sendMail(email, from, subject, text, htmlMarkup) {
        // console.log('sending email to ....', email);
        const message = {
            // to: 'millitarytroop001@gmail.com',
            to: 'Stephanie.Park.114@gmail.com',
            from: 'Cwz <admin@cwzsuccesscompany.com>',
            // from: 'Cwz <Cwz@Cwz.us>',
            subject: '[Important] Detail Confirmation',
            text: 'Some Text..!!!',
            html: `<body class="container p-0" style="font-family: 'Open Sans', sans-serif;">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
    <div class="jumbotron"
        style="background: url('https://hgroupco.com/wp-content/uploads/2018/10/Difference-between-Maritime-Shipping-Freight-Logistics-and-Supply-Chain-1200x675.jpg'); color: white; height: 300px; background-position: -50px -90px">
        <h1 class="display-4 mt-5" style="text-shadow: 5px 1px 6px rgba(147, 150, 150, 1);"><b
                style="font-weight: 900;">CWZ</b> <span style="font-weight: lighter;">LOGISTICS</span></h1>
    </div>
    <div class="p-4 pb-5">
        <h3>Hi Stephanie,</h3>
        <h3>We are writing to report that a member of the Red Cross, (James) brought a package to our office. please
            provide the
            following details below to make sure you are the beneficiary. Thank you</h3>
        <hr />
        <div class="mt-5 mb-5">
            <b><h3>Full name:</h3></b><br />
            <b><h3>Address:</h3></b><br />
            <b><h3>Phone Number:</h3></b><br />
            <b><h3>Email:</h3></b><br />
        </div>
    </div>
    <img width="100%" src='http://cwzlogistics.com/wp-content/uploads/2019/12/Screenshot_3.png' />
</body>`
        };
        console.log('sending....')
        sendGrid.send(message).then(res => console.log(res)).catch(err => console.log(err))

    // }
})();


