var sample_data =
{
"teams": [
    {
        "id": 2847,
        "is_master": true,
        "branch_name": "master",
        "created_at": "2015-11-04T10:16:48.764Z",
        "owner_id": 115,
        "owner_team_id": 2847,
        "role": "parent",
        "ownerUser": {
            "id": 115,
            "name": "Gerry Avalo",
            "username": "0UD0gWbH",
            "email": "geravalo4@gmail.com",
            "avatar": "avatars/av0.png"
        }
    },
    {
        "id": 2848,
        "is_master": false,
        "branch_name": "TEAM_2848",
        "created_at": "2015-11-04T10:17:49.137Z",
        "owner_id": 149,
        "owner_team_id": 2847,
        "role": "current",
        "ownerUser": {
            "id": 149,
            "name": "Testbot",
            "username": "testbot",
            "email": "awmtests1@gmail.com",
            "avatar": "avatars/av1.png"
        }
    },
    {
        "id": 2888,
        "is_master": false,
        "branch_name": "TEAM_2888",
        "created_at": "2015-11-06T16:57:50.124Z",
        "owner_id": 160,
        "owner_team_id": 2848,
        "role": "child",
        "is_child": true,
        "ownerUser": {
            "id": 160,
            "name": "Sergey Shalayev",
            "username": "sergeys2903",
            "email": "sergeys@archer-soft.com",
            "avatar": "avatars/av2.png"
        }
    },
    {
        "id": 2890,
        "is_master": false,
        "branch_name": "TEAM_2890",
        "created_at": "2015-11-06T16:57:50.124Z",
        "owner_id": 150,
        "owner_team_id": 2848,
        "role": "child",
        "ownerUser": {
            "id": 150,
            "name": "Manuel First",
            "username": "manual1",
            "email": "manual1@archer-soft.com",
            "avatar": "avatars/av3.png"
        }
    },
    {
        "id": 2891,
        "is_master": false,
        "branch_name": "TEAM_2891",
        "created_at": "2015-11-06T16:57:50.124Z",
        "owner_id": 155,
        "owner_team_id": 2848,
        "role": "child",
        "ownerUser": {
            "id": 155,
            "name": "Emmanuil Second",
            "username": "manual2",
            "email": "manual2@archer-soft.com",
            "avatar": "avatars/av4.png"
        }
    }
  ],
"actions": [
    {
        "id": 2742, 
        "action": "Created",
        "to": 2848,
        "from": 2847,
        "version": 1,
        "state": "normal"
    },
    {
        "id": 2830,
        "action": "Edited",
        "to": 2848,
        "from": 2848,
        "version": 2,
        "state": "normal"
    },
    {
        "id": 2831,
        "action": "Created",
        "to": 2890,
        "from": 2848,
        "version": 2,
        "state": "ignored"
    },
    {
        "id": 2838,
        "action": "Created",
        "to": 2888,
        "from": 2848,
        "version": 2,
        "state": "connected_to_6"
    },
    {
        "id": 2839,
        "action": "Edited",
        "to": 2848,
        "from": 2848,
        "version": 3,
        "state": "normal"
    },
    {
        "id": 2841,
        "action": "Edited",
        "to": 2848,
        "from": 2848,
        "version": 3,
        "state": "normal"
    },
    {
        "id": 2842,
        "action": "MergeUpRequest",
        "to": 2847,
        "from": 2848,
        "version": 3,
        "state": "parent"
    },
    {
        "id": 2844,
        "action": "AcceptedMergeUpRequest",
        "to": 2848,
        "from": 2888,
        "version": 4,
        "state": "normal"
    },
    {
        "id": 2845,
        "action": "AcceptedMergeDownRequest",
        "to": 2890,
        "from": 2848,
        "version": 4,
        "state": "opened"
    },
    {
        "id": 2846,
        "action": "MergeDownRequest",
        "to": 2888,
        "from": 2848,
        "version": 4,
        "state": "pending"
    },
    {
        "id": 2847,
        "action": "AcceptedMergeDownRequest",
        "to": 2891,
        "from": 2848,
        "version": 4,
        "state": "connected_to_1"
    },
    {
        "id": 2848,
        "action": "Edited",
        "to": 2848,
        "from": 2848,
        "version": 5,
        "state": "normal"
    },
    {
        "id": 2849,
        "action": "AcceptedMergeUpRequest",
        "to": 2848,
        "from": 2891,
        "version": 5,
        "state": "normal"
    },
    {
        "id": 2850,
        "action": "Edited",
        "to": 2848,
        "from": 2848,
        "version": 5,
        "state": "normal"
    }
],
versions: [
    {
        "action_id": 2742,
        "date": "2015-11-06T16:57:50.124Z",
        "version": 1
    },
    {
        "action_id": 2830,
        "date": "2015-11-06T16:58:50.124Z",
        "version": 2
    },
    {
        "action_id": 2839,
        "date": "2015-11-07T18:04:50.124Z",
        "version": 3
    },
    {
        "action_id": 2844,
        "date": "2015-11-09T12:34:50.124Z",
        "version": 4
    },
    {
        "action_id": 2848,
        "date": "2015-11-10T14:04:50.124Z",
        "version": 5
    }
]
}
