var data = [
{
"teams": [
    {
        "name": "Gerry Avalo",
        "id": 2847,
        "is_master": true,
        "branch_name": "master",
        "created_at": "2015-11-04T10:16:48.764Z",
        "owner_id": 115,
        "owner_team_id": 2847,
        "is_current": false,
        "is_child": false,
        "avatar": "avatars/av0.png",
        "ownerUser": {
            "id": 115,
            "username": "0UD0gWbH",
            "email": "geravalo4@gmail.com",
            "avatar": null
        }
    },
    {
        "name": "Testbot",
        "id": 2848,
        "is_master": false,
        "branch_name": "TEAM_2848",
        "created_at": "2015-11-04T10:17:49.137Z",
        "owner_id": 149,
        "owner_team_id": 2847,
        "is_current": true,
        "is_child": false,
        "avatar": "avatars/av1.png",
        "ownerUser": {
            "id": 149,
            "username": "testbot",
            "email": "awmtests1@gmail.com",
            "avatar": null
        }
    },
    {
        "name": "Sergey Shalayev",
        "id": 2888,
        "is_master": false,
        "branch_name": "TEAM_2888",
        "created_at": "2015-11-06T16:57:50.124Z",
        "owner_id": 160,
        "owner_team_id": 2848,
        "is_current": false,
        "is_child": true,
        "avatar": "avatars/av2.png",
        "ownerUser": {
            "id": 160,
            "username": "sergeys2903",
            "email": "sergeys@archer-soft.com",
            "avatar": null
        }
    },
    {
        "name": "Manuel First",
        "id": 2890,
        "is_master": false,
        "branch_name": "TEAM_2890",
        "created_at": "2015-11-06T16:57:50.124Z",
        "owner_id": 150,
        "owner_team_id": 2848,
        "is_current": false,
        "is_child": true,
        "avatar": "avatars/av3.png",
        "ownerUser": {
            "id": 150,
            "username": "manual1",
            "email": "manual1@archer-soft.com",
            "avatar": null
        }
    },
    {
        "name": "Emmanuil Second",
        "id": 2891,
        "is_master": false,
        "branch_name": "TEAM_2891",
        "created_at": "2015-11-06T16:57:50.124Z",
        "owner_id": 155,
        "owner_team_id": 2848,
        "is_current": false,
        "is_child": true,
        "avatar": "avatars/av4.png",
        "ownerUser": {
            "id": 155,
            "username": "manual2",
            "email": "manual2@archer-soft.com",
            "avatar": null
        }
    }
  ],
"actions": [
    {
        "id": 2850,
        "action": "Edited",
        "created_at": "2015-11-12T12:34:50.124Z",
        "user_id": 149,
        "from_team_id": 2848,
        "to_team_id": 2848,
        "from_user": "testbot",
        "to_user_id": 149,
        "to_user": "testbot"
    },
    {
        "id": 2849,
        "action": "AcceptedMergeUpRequest",
        "created_at": "2015-11-12T12:04:50.124Z",
        "user_id": 155,
        "from_team_id": 2891,
        "to_team_id": 2848,
        "from_user": "Manual 2",
        "to_user_id": 149,
        "to_user": "testbot"
    },
    {
        "id": 2848,
        "action": "Edited",
        "created_at": "2015-11-10T14:04:50.124Z",
        "user_id": 149,
        "from_team_id": 2848,
        "to_team_id": 2848,
        "from_user": "testbot",
        "to_user_id": 149,
        "to_user": "testbot"
    },
    {
        "id": 2847,
        "action": "AcceptedMergeDownRequest",
        "created_at": "2015-11-10T12:04:50.124Z",
        "user_id": 149,
        "from_team_id": 2848,
        "to_team_id": 2891,
        "from_user": "testbot",
        "to_user_id": 155,
        "to_user": "Manual 2"
    },
    {
        "id": 2846,
        "action": "MergeDownRequest",
        "created_at": "2015-11-10T12:04:50.124Z",
        "user_id": 149,
        "from_team_id": 2848,
        "to_team_id": 2888,
        "from_user": "testbot",
        "to_user_id": 160,
        "to_user": "Sergey Shalayev"
    },
    {
        "id": 2845,
        "action": "AcceptedMergeDownRequest",
        "created_at": "2015-11-10T12:04:50.124Z",
        "user_id": 149,
        "from_team_id": 2848,
        "to_team_id": 2890,
        "from_user": "testbot",
        "to_user_id": 150,
        "to_user": "Manual 1"
    },
    {
        "id": 2844,
        "action": "AcceptedMergeUpRequest",
        "created_at": "2015-11-09T12:34:50.124Z",
        "user_id": 160,
        "from_team_id": 2888,
        "to_team_id": 2848,
        "from_user": "Sergey Shalayev",
        "to_user_id": 149,
        "to_user": "testbot"
      },
      {
          "id": 2842,
          "action": "MergeUpRequest",
          "created_at": "2015-11-09T12:04:50.124Z",
          "user_id": 149,
          "from_team_id": 2848,
          "to_team_id": 2847,
          "from_user": "testbot",
          "to_user_id": 115,
          "to_user": "Gerry Avalo"
      },
      {
          "id": 2841,
          "action": "Edited",
          "created_at": "2015-11-08T10:20:50.124Z",
          "user_id": 149,
          "from_team_id": 2848,
          "to_team_id": 2848,
          "from_user": "testbot",
          "to_user_id": 149,
          "to_user": "testbot"
      },
      {
          "id": 2839,
          "action": "Edited",
          "created_at": "2015-11-07T18:04:50.124Z",
          "user_id": 149,
          "from_team_id": 2848,
          "to_team_id": 2848,
          "from_user": "testbot",
          "to_user_id": 149,
          "to_user": "testbot"
      },
      {
          "id": 2838,
          "action": "Created",
          "created_at": "2015-11-07T16:58:50.124Z",
          "user_id": 160,
          "from_team_id": 2848,
          "to_team_id": 2888,
          "from_user": "Sergey Shalayev",
          "to_user_id": 160,
          "to_user": "Sergey Shalayev"
      },
      {
          "id": 2831,
          "action": "Created",
          "created_at": "2015-11-07T16:58:50.124Z",
          "user_id": 150,
          "from_team_id": 2848,
          "to_team_id": 2890,
          "from_user": "Manual 1",
          "to_user_id": 150,
          "to_user": "Manual1"
      },
      {
          "id": 2830,
          "action": "Edited",
          "created_at": "2015-11-06T16:58:50.124Z",
          "user_id": 149,
          "from_team_id": 2848,
          "to_team_id": 2848,
          "from_user": "testbot",
          "to_user_id": 149,
          "to_user": "testbot"
      },
      {
          "id": 2742,
          "action": "Created",
          "created_at": "2015-11-06T16:57:50.124Z",
          "user_id": 149,
          "from_team_id": 2847,
          "to_team_id": 2848,
          "from_user": "testbot",
          "to_user_id": 149,
          "to_user": "testbot"
      }
  ],
  "share_map": [
    {
      "id": 2742,
      "action": "Created",
      "from_team_id": 2847,
      "to_team_id": 2848,
      "version": 1,
      "changes_number": 0,
      "updated_at": "2015-11-04T10:17:49.167Z",
      "is_opened": false,
      "from_version": 1,
      "to_version": 1
    },
    {
      "id": 2838,
      "action": "Created",
      "from_team_id": 2848,
      "to_team_id": 2888,
      "version": 2,
      "changes_number": 0,
      "updated_at": "2015-11-06T16:57:50.160Z",
      "is_opened": false,
      "from_version": 2,
      "to_version": 2
    }
  ]
},
{
"teams": [
    {
      "name": "master",
      "id": 2907,
      "is_master": true,
      "branch_name": "master",
      "created_at": "2015-11-04T10:16:48.764Z",
      "owner_id": 115,
      "owner_team_id": 2907,
      "is_current": true,
      "is_child": false,
      "ownerUser": {
        "id": 115,
        "username": "0UD0gWbH",
        "email": "geravalo4@gmail.com",
        "avatar": null
      }
    },
    {
      "name": null,
      "id": 2908,
      "is_master": false,
      "branch_name": "TEAM_2848",
      "created_at": "2015-11-04T10:17:49.137Z",
      "owner_id": 149,
      "owner_team_id": 2907,
      "is_current": false,
      "is_child": true,
      "ownerUser": {
        "id": 149,
        "username": "testbot",
        "email": "awmtests1@gmail.com",
        "avatar": null
      }
    },
    {
      "name": null,
      "id": 2888,
      "is_master": false,
      "branch_name": "TEAM_2888",
      "created_at": "2015-11-06T16:57:50.124Z",
      "owner_id": 160,
      "owner_team_id": 2848,
      "is_current": false,
      "is_child": true,
      "ownerUser": {
        "id": 160,
        "username": "sergeys2903",
        "email": "sergeys@archer-soft.com",
        "avatar": null
      }
    }
  ],
"actions": [
      {
        "id": 2999,
        "action": "MergeDownRequest",
        "user_id": 149,
        "from_team_id": 2907,
        "to_team_id": 2908,
        "from_user": "testbot",
        "to_user_id": 62,
        "to_user": "Marina"
      },
      {
        "id": 2998,
        "action": "MergeDownRequest",
        "user_id": 149,
        "from_team_id": 2907,
        "to_team_id": 2908,
        "from_user": "testbot",
        "to_user_id": 62,
        "to_user": "Marina"
      },
      {
        "id": 2997,
        "action": "MergeDownRequest",
        "user_id": 149,
        "from_team_id": 2907,
        "to_team_id": 2908,
        "from_user": "testbot",
        "to_user_id": 62,
        "to_user": "Marina"
      },
      {
        "id": 2996,
        "action": "MergeDownRequest",
        "user_id": 149,
        "from_team_id": 2907,
        "to_team_id": 2908,
        "from_user": "testbot",
        "to_user_id": 62,
        "to_user": "Marina"
      },
      {
        "id": 2995,
        "action": "Edited",
        "user_id": 149,
        "from_team_id": 2907,
        "to_team_id": 2907,
        "from_user": "testbot",
        "to_user_id": 149,
        "to_user": "testbot"
      },
      {
        "id": 2994,
        "action": "AcceptedMergeDownRequest",
        "user_id": 149,
        "from_team_id": 2907,
        "to_team_id": 2908,
        "from_user": "testbot",
        "to_user_id": 62,
        "to_user": "Marina"
      },
      {
        "id": 2993,
        "action": "MergeDownRequest",
        "user_id": 149,
        "from_team_id": 2907,
        "to_team_id": 2908,
        "from_user": "testbot",
        "to_user_id": 62,
        "to_user": "Marina"
      },
      {
        "id": 2992,
        "action": "MergeDownRequest",
        "user_id": 149,
        "from_team_id": 2907,
        "to_team_id": 2908,
        "from_user": "testbot",
        "to_user_id": 62,
        "to_user": "Marina"
      },
      {
        "id": 2991,
        "action": "MergeDownRequest",
        "user_id": 149,
        "from_team_id": 2907,
        "to_team_id": 2908,
        "from_user": "testbot",
        "to_user_id": 62,
        "to_user": "Marina"
      },
      {
        "id": 2990,
        "action": "Edited",
        "user_id": 149,
        "from_team_id": 2907,
        "to_team_id": 2907,
        "from_user": "testbot",
        "to_user_id": 149,
        "to_user": "testbot"
      },
      {
        "id": 2989,
        "action": "Created",
        "user_id": 62,
        "from_team_id": 2907,
        "to_team_id": 2908,
        "from_user": "Marina",
        "to_user_id": 62,
        "to_user": "Marina"
      },
      {
        "id": 2988,
        "action": "Created",
        "user_id": 149,
        "from_team_id": 2907,
        "to_team_id": 2907,
        "from_user": "testbot",
        "to_user_id": 149,
        "to_user": "testbot"
      }
    ],
  "share_map": [
    {
      "id": 2742,
      "action": "Created",
      "from_team_id": 2847,
      "to_team_id": 2848,
      "version": 1,
      "changes_number": 0,
      "updated_at": "2015-11-04T10:17:49.167Z",
      "is_opened": false,
      "from_version": 1,
      "to_version": 1
    },
    {
      "id": 2838,
      "action": "Created",
      "from_team_id": 2848,
      "to_team_id": 2888,
      "version": 2,
      "changes_number": 0,
      "updated_at": "2015-11-06T16:57:50.160Z",
      "is_opened": false,
      "from_version": 2,
      "to_version": 2
    }
  ]
}
]