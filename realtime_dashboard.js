// make a dashboard to show stuff here

firebase.firestore().collection('status')
    .where('state', '==', 'online')
    .onSnapshot(function(snapshot) {
        snapshot.docChanges().forEach(function(change) {
            if (change.type === 'added') {
                var msg = 'User ' + change.doc.id + ' is online.';
                console.log(msg);
                // ...
            }
            if (change.type === 'removed') {
                var msg = 'User ' + change.doc.id + ' is offline.';
                console.log(msg);
                // ...
            }
        });
    });
