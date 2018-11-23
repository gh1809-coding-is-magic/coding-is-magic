using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ConfettiWin : MonoBehaviour {
    public ParticleSystem ps;
	void Start () {
        ps = GetComponent<ParticleSystem>();
	}

	// Update is called once per frame
	void Update () {
	}
	void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.name == "Trigger")
        {
            Debug.Log("This collided");
            // Explode();
            ps.Play();
        }
    }

}
